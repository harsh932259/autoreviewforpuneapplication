// ===== BUSINESS SETTINGS =====

const businessName = "Flamingo Cafe";
const googleReviewLink =
"https://g.page/r/CTOomNcWlZN2EBM/review";


// ===== REVIEW TEMPLATES =====

const templates = {

  en: {
    intro: [
      "Amazing experience at",
      "Very happy with the service at",
      "Loved visiting",
      "Great overall experience at",
      "Highly satisfied with"
    ],
    middle: [
      "the staff was very friendly.",
      "quality was excellent.",
      "service was quick and professional.",
      "food and atmosphere were amazing.",
      "everything was clean and well managed."
    ],
    ending: [
      "Highly recommended!",
      "Will visit again.",
      "Totally worth it.",
      "Five star experience.",
      "Must try place."
    ]
  },

  hi: {
    intro: [
      "मेरा अनुभव बहुत अच्छा रहा",
      "बहुत बढ़िया सर्विस मिली",
      "यहाँ आकर अच्छा लगा",
      "काफी शानदार अनुभव था",
      "मैं बहुत संतुष्ट हूँ"
    ],
    middle: [
      "स्टाफ बहुत अच्छा था।",
      "सर्विस तेज और प्रोफेशनल थी।",
      "क्वालिटी बहुत अच्छी थी।",
      "जगह साफ और अच्छी थी।",
      "पूरा अनुभव शानदार रहा।"
    ],
    ending: [
      "जरूर ट्राय करें।",
      "फिर से आऊंगा।",
      "बहुत बढ़िया जगह है।",
      "पूरी तरह संतुष्ट।",
      "Highly recommended."
    ]
  },

  mr: {
    intro: [
      "खूप छान अनुभव आला",
      "सेवा खूप चांगली होती",
      "येथे येऊन आनंद झाला",
      "एकदम उत्तम अनुभव",
      "मी खूप समाधानी आहे"
    ],
    middle: [
      "स्टाफ खूप मदत करणारा होता.",
      "सर्विस जलद आणि प्रोफेशनल होती.",
      "क्वालिटी अप्रतिम होती.",
      "जागा स्वच्छ आणि छान होती.",
      "एकूण अनुभव खूप चांगला."
    ],
    ending: [
      "नक्की भेट द्या.",
      "पुन्हा येणार.",
      "खूपच छान जागा.",
      "पूर्ण समाधान.",
      "Highly recommended."
    ]
  }
};


// ===== APP STATE =====

let currentLang = "en";
let shownCount = 0;
const batchSize = 10;   // how many reviews per load
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


// ===== PREPARE MANY REVIEWS =====

function buildPool() {
  generatedReviews = [];
  const used = new Set();

  while (used.size < 100) {
    used.add(createReview(currentLang));
  }

  generatedReviews = [...used];
  shownCount = 0;
}


// ===== RENDER NEXT BATCH =====

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


// ===== POST =====

function postReview(text) {

  navigator.clipboard.writeText(text)
    .then(() => {
      window.open(googleReviewLink, "_blank");
      showCopiedMessage();
    })
    .catch(() => {

      // fallback method (old browsers)
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);

      window.open(googleReviewLink, "_blank");
      showCopiedMessage();
    });
}

function showCopiedMessage() {
  alert("Review copied. Paste and press POST.");
}


// ===== INIT =====

buildPool();
loadMore();