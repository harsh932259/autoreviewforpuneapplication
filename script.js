// ===== BUSINESS SETTINGS =====

const businessName = "Concept Academy";

const googleReviewLink =
"https://g.page/r/CTOomNcWlZN2EBM/review";


// ===== REVIEW TEMPLATES =====

const templates = {

  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Excellent learning experience at",
      "Very satisfied with the teaching at",
      "Highly impressed by",
      "Great coaching classes from",
      "Professional guidance provided by"
    ],

    middle: [
      "teachers explain concepts very clearly.",
      "study material is helpful and easy to understand.",
      "faculty is supportive and motivating.",
      "teaching method is simple and effective.",
      "classes helped improve my confidence and scores."
    ],

    ending: [
      "Highly recommended for students!",
      "Best coaching institute.",
      "Great learning environment.",
      "Excellent guidance overall.",
      "Five star academic experience."
    ]
  },


  // ---------- HINDI ----------
  hi: {
    intro: [
      "Concept Academy में बहुत अच्छा अनुभव रहा",
      "यहाँ की पढ़ाई से पूरी तरह संतुष्ट हूँ",
      "Concept Academy की टीचिंग शानदार है",
      "बहुत प्रोफेशनल तरीके से पढ़ाया जाता है",
      "यहाँ पढ़ाई का अनुभव बेहतरीन रहा"
    ],

    middle: [
      "टीचर्स कॉन्सेप्ट बहुत अच्छे से समझाते हैं।",
      "स्टडी मटेरियल बहुत हेल्पफुल है।",
      "फैकल्टी सपोर्टिव और मोटिवेटिंग है।",
      "पढ़ाने का तरीका आसान और असरदार है।",
      "मेरे मार्क्स और कॉन्फिडेंस में सुधार हुआ।"
    ],

    ending: [
      "जरूर रिकमेंड करूंगा।",
      "बेहतरीन कोचिंग क्लास।",
      "स्टूडेंट्स के लिए बहुत अच्छी जगह।",
      "शानदार अनुभव।",
      "Highly recommended."
    ]
  },


  // ---------- MARATHI ----------
  mr: {
    intro: [
      "Concept Academy मध्ये खूप छान अनुभव आला",
      "इथली शिकवण्याची पद्धत खूप चांगली आहे",
      "Concept Academy ची सेवा समाधानकारक आहे",
      "इथे प्रोफेशनल मार्गदर्शन मिळते",
      "खूप विश्वासार्ह कोचिंग क्लास आहे"
    ],

    middle: [
      "टीचर्स कॉन्सेप्ट खूप स्पष्ट समजावतात.",
      "स्टडी मटेरियल खूप उपयोगी आहे.",
      "फॅकल्टी खूप मदत करणारी आहे.",
      "शिकवण्याची पद्धत सोपी आणि प्रभावी आहे.",
      "माझा आत्मविश्वास आणि मार्क्स सुधारले."
    ],

    ending: [
      "नक्की भेट द्या.",
      "खूप छान कोचिंग क्लास.",
      "विद्यार्थ्यांसाठी उत्तम जागा.",
      "खूप समाधान.",
      "Highly recommended."
    ]
  }

};


// ===== APP STATE =====

let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];


// ===== HELPERS =====

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createReview(lang) {

  const t = templates[lang];

  return (
    randomItem(t.intro) + " " +
    businessName + ". " +
    randomItem(t.middle) + " " +
    randomItem(t.ending)
  );
}


// ===== BUILD 100 UNIQUE REVIEWS =====

function buildPool() {

  generatedReviews = [];
  const used = new Set();

  while (used.size < 100) {
    used.add(createReview(currentLang));
  }

  generatedReviews = [...used];
  shownCount = 0;
}


// ===== LOAD MORE =====

function loadMore() {

  const box = document.getElementById("reviews");

  for (let i = 0; i < batchSize; i++) {

    if (shownCount >= generatedReviews.length) {
      document.getElementById("loadMoreBtn").style.display = "none";
      return;
    }

    const review = generatedReviews[shownCount];
    shownCount++;

    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.textContent = review;

    const btn = document.createElement("button");
    btn.textContent = "Post Review";
    btn.className = "post-btn";
    btn.onclick = () => postReview(review);

    card.appendChild(text);
    card.appendChild(btn);

    box.appendChild(card);
  }
}


// ===== LANGUAGE SWITCH =====

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("reviews").innerHTML = "";
  document.getElementById("loadMoreBtn").style.display = "block";
  buildPool();
  loadMore();
}


// ===== COPY + OPEN GOOGLE =====

function postReview(text) {

  navigator.clipboard.writeText(text).then(() => {

    window.open(googleReviewLink, "_blank");

    alert("Review copied 👍 Paste and press POST.");

  });
}


// ===== INIT =====

buildPool();
loadMore();
