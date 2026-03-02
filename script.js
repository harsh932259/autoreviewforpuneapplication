// ===== BUSINESS SETTINGS =====

const businessName = "Concept Academy";

const googleReviewLink =
"https://g.page/r/CeJ_x5rd31VLEBM/review";


// ===== REVIEW TEMPLATES =====

const templates = {

  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Excellent engineering coaching at",
      "Very satisfied with the engineering guidance at",
      "Highly impressed by the technical teaching at",
      "Great engineering preparation classes from",
      "Professional engineering mentoring provided by"
    ],

    middle: [
      "faculty explains engineering concepts and numericals very clearly.",
      "notes and study material are perfect for diploma and degree students.",
      "teachers focus on problem-solving and exam-oriented preparation.",
      "complex engineering topics are taught in a simple way.",
      "classes helped improve my technical understanding and marks."
    ],

    ending: [
      "Highly recommended for engineering students!",
      "Best engineering coaching institute.",
      "Perfect for diploma and degree preparation.",
      "Excellent technical guidance overall.",
      "Five star learning experience."
    ]
  },


  // ---------- HINDI ----------
  hi: {
    intro: [
      "Concept Academy में इंजीनियरिंग कोचिंग का बहुत अच्छा अनुभव रहा",
      "यहाँ की इंजीनियरिंग गाइडेंस से पूरी तरह संतुष्ट हूँ",
      "इंजीनियरिंग स्टूडेंट्स के लिए शानदार क्लासेस",
      "बहुत प्रोफेशनल तरीके से इंजीनियरिंग पढ़ाई जाती है",
      "टेक्निकल विषयों की बेहतरीन कोचिंग मिलती है"
    ],

    middle: [
      "टीचर्स इंजीनियरिंग कॉन्सेप्ट और न्यूमेरिकल्स बहुत अच्छे से समझाते हैं।",
      "डिप्लोमा और डिग्री स्टूडेंट्स के लिए स्टडी मटेरियल बहुत हेल्पफुल है।",
      "एग्जाम ओरिएंटेड तैयारी पर पूरा फोकस रहता है।",
      "कठिन टेक्निकल टॉपिक्स आसान तरीके से समझाए जाते हैं।",
      "मेरे टेक्निकल कॉन्फिडेंस और मार्क्स में सुधार हुआ।"
    ],

    ending: [
      "इंजीनियरिंग स्टूडेंट्स के लिए जरूर रिकमेंड करूंगा।",
      "बेहतरीन इंजीनियरिंग कोचिंग क्लास।",
      "टेक्निकल स्टूडेंट्स के लिए शानदार जगह।",
      "बहुत अच्छा लर्निंग अनुभव।",
      "Highly recommended."
    ]
  },


  // ---------- MARATHI ----------
  mr: {
    intro: [
      "Concept Academy मध्ये इंजिनिअरिंग कोचिंगचा खूप चांगला अनुभव आला",
      "इथले इंजिनिअरिंग मार्गदर्शन उत्कृष्ट आहे",
      "इंजिनिअरिंग विद्यार्थ्यांसाठी उत्तम क्लासेस",
      "टेक्निकल विषय खूप प्रोफेशनल पद्धतीने शिकवले जातात",
      "डिप्लोमा आणि डिग्रीसाठी खूप चांगले कोचिंग"
    ],

    middle: [
      "टीचर्स इंजिनिअरिंग कॉन्सेप्ट आणि न्यूमेरिकल्स खूप स्पष्ट समजावतात.",
      "डिप्लोमा आणि डिग्री विद्यार्थ्यांसाठी स्टडी मटेरियल खूप उपयोगी आहे.",
      "एग्जाम ओरिएंटेड तयारीवर चांगला फोकस असतो.",
      "अवघड टेक्निकल टॉपिक्स सोप्या पद्धतीने शिकवले जातात.",
      "माझा आत्मविश्वास आणि मार्क्स दोन्ही सुधारले."
    ],

    ending: [
      "इंजिनिअरिंग विद्यार्थ्यांसाठी नक्की भेट द्या.",
      "खूप छान इंजिनिअरिंग कोचिंग क्लास.",
      "टेक्निकल विद्यार्थ्यांसाठी उत्तम जागा.",
      "शिकण्याचा उत्कृष्ट अनुभव.",
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
