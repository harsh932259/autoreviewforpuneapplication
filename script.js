// ===== BUSINESS SETTINGS =====
const businessName = "Concept Academy";
const googleReviewLink = "https://g.page/r/CeJ_x5rd31VLEBM/review";

// YOUR GOOGLE WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxrWRp-PGEttrrr_ypG3H7xnPJqT7lEc-80ro170eV5JjSFckgsSQlr8MUmrDkmKq0b/exec"; 

// ===== REVIEW TEMPLATES (1000 COMBINATIONS PER LANGUAGE) =====
const templates = {
  en: {
    intro: [
      "Excellent engineering coaching at [BIZ].", "Very satisfied with the engineering guidance at [BIZ].", "Highly impressed by the technical teaching at [BIZ].", "Great engineering preparation classes from [BIZ].", "Professional engineering mentoring provided by [BIZ].", "Joined [BIZ] for my engineering prep.", "The technical coaching at [BIZ] is outstanding.", "I had a wonderful experience learning at [BIZ].", "[BIZ] is the best place for engineering students.", "Glad I chose [BIZ] for my engineering classes."
    ],
    middle: [
      "The faculty explains engineering concepts and numericals very clearly.", "The notes and study material are perfect for diploma and degree students.", "Teachers focus on problem-solving and exam-oriented preparation.", "Complex engineering topics are taught in a simple way.", "Classes helped improve my technical understanding and marks.", "The teaching methodology makes difficult subjects easy to grasp.", "Doubt solving sessions are very interactive and helpful.", "The syllabus is covered perfectly on time.", "Practical examples used in class cleared all my fundamentals.", "The test series and mock exams really boosted my confidence."
    ],
    ending: [
      "Highly recommended for engineering students!", "Best engineering coaching institute.", "Perfect for diploma and degree preparation.", "Excellent technical guidance overall.", "Five star learning experience.", "A must-join for every engineering aspirant.", "Couldn't have asked for better tutors.", "Totally worth the time and investment.", "Highly satisfied with the results.", "10/10 would recommend to my juniors."
    ]
  },
  hi: {
    intro: [
      "[BIZ] में इंजीनियरिंग कोचिंग का बहुत अच्छा अनुभव रहा।", "[BIZ] की इंजीनियरिंग गाइडेंस से पूरी तरह संतुष्ट हूँ।", "[BIZ] में इंजीनियरिंग स्टूडेंट्स के लिए शानदार क्लासेस हैं।", "[BIZ] में बहुत प्रोफेशनल तरीके से इंजीनियरिंग पढ़ाई जाती है।", "[BIZ] में टेक्निकल विषयों की बेहतरीन कोचिंग मिलती है।", "[BIZ] में पढ़ने का मेरा फैसला बिल्कुल सही था।", "[BIZ] की टेक्निकल कोचिंग बहुत ही शानदार है।", "मैंने अपनी इंजीनियरिंग की तैयारी [BIZ] से की है।", "इंजीनियरिंग स्टूडेंट्स के लिए [BIZ] सबसे अच्छी जगह है।", "[BIZ] के टीचर्स बहुत ही अनुभवी और मददगार हैं।"
    ],
    middle: [
      "टीचर्स इंजीनियरिंग कॉन्सेप्ट और न्यूमेरिकल्स बहुत अच्छे से समझाते हैं।", "डिप्लोमा और डिग्री स्टूडेंट्स के लिए स्टडी मटेरियल बहुत हेल्पफुल है।", "एग्जाम ओरिएंटेड तैयारी पर पूरा फोकस रहता है।", "कठिन टेक्निकल टॉपिक्स आसान तरीके से समझाए जाते हैं।", "मेरे टेक्निकल कॉन्फिडेंस और मार्क्स में सुधार हुआ।", "पढ़ाने का तरीका इतना अच्छा है कि मुश्किल विषय भी आसान लगते हैं।", "डाउट सॉल्विंग सेशन बहुत इंटरैक्टिव और फायदेमंद होते हैं।", "सिलेबस बिल्कुल समय पर और अच्छे से कवर किया जाता है।", "क्लास में दिए गए प्रैक्टिकल उदाहरणों से बेसिक कॉन्सेप्ट्स क्लियर हो गए।", "टेस्ट सीरीज और मॉक एग्जाम से मेरा कॉन्फिडेंस बहुत बढ़ा।"
    ],
    ending: [
      "इंजीनियरिंग स्टूडेंट्स के लिए जरूर रिकमेंड करूंगा।", "बेहतरीन इंजीनियरिंग कोचिंग क्लास।", "टेक्निकल स्टूडेंट्स के लिए शानदार जगह।", "बहुत अच्छा लर्निंग अनुभव।", "Highly recommended.", "हर इंजीनियरिंग स्टूडेंट को यहाँ ज्वाइन करना चाहिए।", "इससे बेहतर ट्यूटर्स नहीं मिल सकते थे।", "पैसा और समय दोनों वसूल हो गए।", "मैं अपने रिज़ल्ट से बहुत खुश हूँ।", "अपने जूनियर्स को 100% रिकमेंड करूंगा।"
    ]
  },
  mr: {
    intro: [
      "[BIZ] मध्ये इंजिनिअरिंग कोचिंगचा खूप चांगला अनुभव आला.", "[BIZ] चे इंजिनिअरिंग मार्गदर्शन उत्कृष्ट आहे.", "[BIZ] मध्ये इंजिनिअरिंग विद्यार्थ्यांसाठी उत्तम क्लासेस आहेत.", "[BIZ] मध्ये टेक्निकल विषय खूप प्रोफेशनल पद्धतीने शिकवले जातात.", "[BIZ] कडून डिप्लोमा आणि डिग्रीसाठी खूप चांगले कोचिंग मिळते.", "[BIZ] मध्ये प्रवेश घेण्याचा माझा निर्णय अगदी योग्य होता.", "[BIZ] मधील टेक्निकल कोचिंग अतिशय उत्कृष्ट आहे.", "मी माझी इंजिनिअरिंगची तयारी [BIZ] मधून केली.", "इंजिनिअरिंगच्या विद्यार्थ्यांसाठी [BIZ] हे सर्वोत्तम ठिकाण आहे.", "[BIZ] मधील शिक्षक खूप अनुभवी आणि मदत करणारे आहेत."
    ],
    middle: [
      "टीचर्स इंजिनिअरिंग कॉन्सेप्ट आणि न्यूमेरिकल्स खूप स्पष्ट समजावतात.", "डिप्लोमा आणि डिग्री विद्यार्थ्यांसाठी स्टडी मटेरियल खूप उपयोगी आहे.", "एग्जाम ओरिएंटेड तैयारीवर चांगला फोकस असतो.", "अवघड टेक्निकल टॉपिक्स सोप्या पद्धतीने शिकवले जातात.", "माझा आत्मविश्वास आणि मार्क्स दोन्ही सुधारले.", "शिकवण्याची पद्धत इतकी सोपी आहे की कठीण विषयही सहज समजतात.", "डाऊट सॉल्व्हिंग सेशन्स खूप इंटरॅक्टिव्ह आणि फायदेशीर असतात.", "अभ्यासक्रम वेळेवर आणि अगदी योग्य प्रकारे पूर्ण केला जातो.", "क्लासमध्ये दिलेल्या प्रॅक्टिकल उदाहरणांमुळे माझे सर्व बेसिक कॉन्सेप्ट्स क्लिअर झाले.", "टेस्ट सिरीज आणि मॉक एक्झाम्समुळे माझा आत्मविश्वास खूप वाढला."
    ],
    ending: [
      "इंजिनिअरिंग विद्यार्थ्यांसाठी नक्की भेट द्या.", "खूप छान इंजिनिअरिंग कोचिंग क्लास.", "टेक्निकल विद्यार्थ्यांसाठी उत्तम जागा.", "शिकण्याचा उत्कृष्ट अनुभव.", "Highly recommended.", "प्रत्येक इंजिनिअरिंग विद्यार्थ्याने येथे प्रवेश घ्यावा.", "यापेक्षा चांगले ट्युटर्स मिळूच शकत नव्हते.", "वेळ आणि पैशाचे सार्थक झाले.", "मी माझ्या निकालावर पूर्णपणे समाधानी आहे.", "माझ्या ज्युनिअर्सना नक्कीच सुचवेन."
    ]
  }
};

// ===== APP STATE =====
let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];
let usedReviewsFromServer = []; 

// ===== HELPERS =====
function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function createReview(lang) {
  const t = templates[lang];
  const intro = randomItem(t.intro).replace("[BIZ]", businessName);
  return `${intro} ${randomItem(t.middle)} ${randomItem(t.ending)}`;
}

// ===== INIT APP & CONNECT TO DB =====
async function initApp() {
  document.getElementById("reviews").innerHTML = "<p style='text-align:center; color: gray;'>Loading fresh reviews...</p>";
  document.getElementById("loadMoreBtn").style.display = "none";
  
  try {
    const response = await fetch(WEB_APP_URL);
    usedReviewsFromServer = await response.json();
  } catch (error) {
    console.error("Could not connect to database. Starting fresh.", error);
    usedReviewsFromServer = [];
  }
  
  setLanguage('en'); 
}

// ===== BUILD SAFE REVIEWS & FAILSAFE =====
function buildPool() {
  generatedReviews = [];
  const used = new Set();
  let safetyCounter = 0; 

  while (used.size < 30 && safetyCounter < 3000) {
    safetyCounter++;
    const newReview = createReview(currentLang);
    if (!usedReviewsFromServer.includes(newReview) && !used.has(newReview)) {
      used.add(newReview);
    }
  }

  generatedReviews = [...used];
  shownCount = 0;

  // The Failsafe: If all 1000 combinations are used in this language
  if (generatedReviews.length === 0) {
    document.getElementById("reviews").innerHTML = `
      <div style="text-align:center; padding: 30px 10px;">
        <h3 style="margin-bottom:10px;">🎉 Thank You!</h3>
        <p style="color:gray;">We have received an overwhelming amount of support. All available unique reviews in this language have been posted.</p>
      </div>`;
    document.getElementById("loadMoreBtn").style.display = "none";
    return false; // Tells the app to stop loading
  }
  return true; 
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
  
  const poolBuilt = buildPool();
  if (poolBuilt) { loadMore(); }
}

// ===== COPY + OPEN GOOGLE + SAVE TO DB =====
function postReview(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.open(googleReviewLink, "_blank");
    alert("Review copied 👍 Paste it on Google and press POST.");

    fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ review: text })
    });

    usedReviewsFromServer.push(text);
  });
}

// ===== START THE ENGINE =====
initApp();
