const questions = [
    {
        question:"'ज्ञान सुधाकर' नामक रचना के रचनाकार बतावा-",
        answers: [
            { text: "राजा दलेल सिंह", correct: false},
            { text: "पद्मदास", correct: false},
            { text: "रूद्र सिंह", correct: true},
            { text: "नरेश नीलकमल", correct: false},
        ] 
    },

    {
        question:"खोरठा भासाक पहिल ब्लॉग लिखवइया कर नाम बतावा-",
        answers: [
            { text: "पंचम महतो", correct: false},
            { text: "विनय तिवारी", correct: false},
            { text: "जर्नादन गोस्वामी व्यथित", correct: false},
            { text: "गिरिधारी गोस्वामी 'आकश खूंटी'", correct: true},
        ] 
    },

    {
        question:"'मइधगंधा किताब' कोन संग्या लागइ?",
        answers: [
            { text: "जातिवाचक संइगा", correct: false},
            { text: "बेकतिवाचक सइंगा", correct: true},
            { text: "भाव वाचक सइंगा", correct: false},
            { text: "गुनवाचक सइंगा", correct: false},
        ] 
    },

    {
        question:"सही कथन के छांटा-",
        answers: [
            { text: "खोरठा भासायं 8 स्वर हे", correct: false},
            { text: "उपबंजन 2 हे", correct: false},
            { text: "चाइर गो खोरठा भासाक बिसेस साहा हे", correct: false},
            { text: "सभे सही हे", correct: true},
        ] 
    },

    {
        question:"जे बेस पढतइ से हे परछिा पास करतइ। हिंया जे, से कोन सरबनाम लागइ?",
        answers: [
            { text: "पुरूसवाचब सरबनाम", correct: false},
            { text: "समइ बोधक सरबनाम", correct: false},
            { text: "संबंध वाचक सरबनाम", correct: true},
            { text: "मातरा वाची सरबनाम", correct: false},
        ] 
    },

    {
        question:"जोन समासें पूर्व पद आर उतर पद सड़ंगा रूपे दोहरान हवो हे, ओकरा की कहल जा हे?",
        answers: [
            { text: "करमधारध समास", correct: false},
            { text: "द्विगु समास", correct: false},
            { text: "अव्ययीभाव समास", correct: true},
            { text: "तत्पुरूस समास", correct: false},
        ] 
    },

    {
        question:"गलत मिलना के छांटा (विलोम सबदे)",
        answers: [
            { text: "हेमाल - कनकन", correct: true},
            { text: "मनुीस - गोला", correct: false},
            { text: "टोपरा - डाबइर", correct: false},
            { text: "चनफन हेंजोमारा", correct: false},
        ] 
    },

    {
        question:"खोरठा भासा के उसम साड़ा के छांटा-",
        answers: [
            { text: "ल, व", correct: false},
            { text: "च, छ", correct: false},
            { text: "ख, घ", correct: false},
            { text: "स, ह", correct: true},
        ] 
    },

    {
        question:"बापें कहलइ कि आब तोञ कोन्हों काम-धाम कर। हियां 'बाप' सबद में कोन कारक आइल हे?",
        answers: [
            { text: "करता कारक", correct: true},
            { text: "करन कारक", correct: false},
            { text: "अधिकरन कारक", correct: false},
            { text: "संबोधन कारक", correct: false},
        ] 
    },

    {
        question:"बुचु, नुनु, नुनी, एहो, अगे...कोन कारक के कारकीय विभक्ति हकइ?",
        answers: [
            { text: "संबंध कारक", correct: false},
            { text: "संबोधन कारक", correct: true},
            { text: "करन कारक", correct: false},
            { text: "करम कारक", correct: false},
        ] 
    },

    {
        question:"अंधरिया राइत हे तोञ रसें-रसें घर जउ। हिंया रसे-रसे कोन समास हकइ?",
        answers: [
            { text: "द्वंद्व समास", correct: false},
            { text: "करमधारय समास", correct: false},
            { text: "अव्ययीभाव समास", correct: true},
            { text: "तत्पुरूष समास", correct: false},
        ] 
    },

   

    {
        question:"खोरठा पतरिका के संपादक श्रीनिवास पानुरी जी हला। हिंया 'खोरठा पतरिका' कोन सड़ंगा हकइ?",
        answers: [
            { text: "जातिवाचक सइंगा", correct: false},
            { text: "बेकतिवावक सईगा", correct: true},
            { text: "भाव वाचक सइंगा", correct: false},
            { text: "गोंठ वाचक सइंगा", correct: false},
        ] 
    },

    {
        question:"जने, तने, कने...... कोन सरबनाम हकइ?",
        answers: [
            { text: "समइबोधक सरबनाम", correct: false},
            { text: "दिशा बोधक सरबनाम", correct: true},
            { text: "ठेकानवाची सरबनाम", correct: false},
            { text: "अनठेकान वाची सरबनाम", correct: false},
        ] 
    },

    {
        question:"मुल विसेसन सबदें 'गर' परतिअइ जुटल से बनल विसेसन के छांटा-",
        answers: [
            { text: "हुबगर", correct: true},
            { text: "सगर", correct: false},
            { text: "अगर", correct: false},
            { text: "बेगर", correct: false},
        ] 
    },

    {
        question:"आइझ 'दू बीता जमीन' खातिन बुधना आर तिलका लड़ल हे। हिजां दू बीता जमीन कोन विसेसन हकइ?",
        answers: [
            { text: "मातरा वाची बिसेसन", correct: true},
            { text: "जोखा जोखी विसेसन", correct: false},
            { text: "ठेकान वाची विसेसन", correct: false},
            { text: "अनठेकान वाची विसेसन", correct: false},
        ] 
    },

    {
        question:"सुलकसाय कइसन रचना हे-",
        answers: [
            { text: "गीत संगरह", correct: false},
            { text: "खंड काइब", correct: true},
            { text: "नाटक", correct: false},
            { text: "कहनि गोछ", correct: false},
        ] 
    },

    {
        question:"खोरठा भासाक पहिल मासिक बुलेटिन पतरिका कर नाम बतावा-",
        answers: [
            { text: "मातरीभासा", correct: false},
            { text: "तितकी", correct: true},
            { text: "खोरठा", correct: false},
            { text: "करिल", correct: false},
        ] 
    },

    {
        question:"फुचुकाकाक धरम नामक खोरठा कहनि के कहनिकार बतावा-",
        answers: [
            { text: "शिवनंदन पांडे गरीब", correct: false},
            { text: "पारसनाथ महतो", correct: false},
            { text: "गिरिधारी गोस्वामी", correct: false},
            { text: "विश्वनाथ दसौंधी राज", correct: true},
        ] 
    },

    {
        question:"फिरंगी विश्वकर्मा किनखर बापेक नाम हकइ? |",
        answers: [
            { text: "सुकुमार", correct: false},
            { text: "दीपक सवाल", correct: false},
            { text: "प्रदीप कुमार दीपक", correct: true},
            { text: "अनिता कुमारी", correct: false},
        ] 
    },

    {
        question:"अंबुज कुमार अंबज जीक सही जनम बछर बतावा-",
        answers: [
            { text: "15 सितंबर, 1965 ", correct: false},
            { text: "15 सितंबर, 1966", correct: false},
            { text: "15 सितंबर, 1967 ", correct: true},
            { text: "15 सितंबर, 1968", correct: false},
        ] 
    },

    {
        question:"कसमार में झारखण्ड आंदोलन नामक रचना के रचनाकार बतावा-",
        answers: [
            { text: "प्रदीप कुमार दीपक", correct: false},
            { text: "दीपक सवाल", correct: true},
            { text: "सुभद्रा कुमारी", correct: false},
            { text: "अनिता कुमारी", correct: false},
        ] 
    },

    {
        question:"'बोन रक्ष जीवन रक्षा' नामक रचना कोन किताब कर लागइ?",
        answers: [
            { text: "एक मउनी फूल", correct: false},
            { text: "सोहान लागे रे", correct: true},
            { text: "एक पथिया डोंगल महुआ", correct: false},
            { text: "खोरठा काठे पइदेक खंडी", correct: false},
        ] 
    },

    {
        question:"सेवांतिक बाउंड़ी मेला' एकर में सेवांतिक सबदे कोन कारक के कारकीय विभक्ति लागल हे?",
        answers: [
            { text: "करम कारक", correct: false},
            { text: "करता कारक", correct: false},
            { text: "करन कारक", correct: false},
            { text: "संबंध कारक", correct: true},
        ] 
    },

    {
        question:"वन-परिधन साजे, नाना रंगेक पइंखी राजे लहर-लहर उड़े तिरंगा निसानी....... ई खंड टुकरा कोन रचना के लागइ? ",
        answers: [
            { text: "देसेक जुवान", correct: false},
            { text: "जय जवान जय किसान", correct: false},
            { text: "आगु करब आपन देस", correct: false},
            { text: "जय मांय जननी", correct: true},
        ] 
    },

    {
        question:"'बोन रक्षा जीवन रक्षा' गीतेक मुइख विसइ हे-",
        answers: [
            { text: "गोटा जीवन के", correct: false},
            { text: "बानेक", correct: false},
            { text: "बोनेक गरू डांगर के", correct: false},
            { text: "पर्यावरण सुरक्षा", correct: true},
        ] 
    },

    {
        question:"रीझें हिया बेआकुल रे, भादर मांसे। पियवा परदेसवा, कुहकय करेजवा, भादर मासे। हाय रे, भादर मासे- इ गीत कोन रस भेंटा हे?",
        answers: [
            { text: "संजोग सिंगार रस", correct: false},
            { text: "बिजोर सिंगार रस", correct: true},
            { text: "करून रस", correct: false},
            { text: "बीर रस", correct: false},
        ] 
    },

    {
        question:"दिनेश दिनमणि जी के 'श्री निवास पानुरी प्रबुद्ध सम्मान कब मिलल हे?",
        answers: [
            { text: "2015", correct: false},
            { text: "2017", correct: false},
            { text: "2018", correct: true},
            { text: "2019", correct: false},
        ] 
    },

    {
        question:"कोन परबेक बरनन 'मांदइर बाजे रे बांसी बारे जे' गीते नाञ करल गेल हे?",
        answers: [
            { text: "करम", correct: false},
            { text: "जितिया", correct: true},
            { text: "सोहराय", correct: false},
            { text: "टुसू", correct: false},
        ] 
    },

    {
        question:"तोंञ जुवान देसेक सान, देसेक लेल माटी खातिर करेंइ तोंञ लहुक दान।------ ई खंड टुकरा कोन कविताक लागइ? ",
        answers: [
            { text: "जय जवान जय किसान", correct: false},
            { text: "देसेक जुवान", correct: true},
            { text: "दुइयो के", correct: false},
            { text: "केकरो नाँय", correct: false},
        ] 
    },



    {
        question:"कारतिकेक बाहन के बतावा-",
        answers: [
            { text: "मुसा", correct: false},
            { text: "मोर", correct: true},
            { text: "सांप", correct: false},
            { text: "बाघ", correct: false},
        ] 
    },

    {
        question:"महुआक मनिता नामक खोरठा कबिता कोन कबिता गोछ के एगो कविता लागइ?",
        answers: [
            { text: "एक पथिया डोंगल महुआ", correct: true},
            { text: "सोहान लागे रे", correct: false},
            { text: "एक मउनी फुल", correct: false},
            { text: "सोंध माटी", correct: false},
        ] 
    },

    {
        question:"पानुरी जी हाइनिसार... तखन उनखा जोर देलथी जुगजीतवा विदुवान राहुल जी कहलथि हाइनिसारेक डांडी परिहा नांइ आर कवि सरकारी बनिहा नांइ। ई खंड टुकरा | कोन कबिता के हकइ?",
        answers: [
            { text: "आइझ एकाइ खोरठा", correct: true},
            { text: "तबे हामें कबि नांइ", correct: false},
            { text: "आगु करब आपन देस", correct: false},
            { text: "हमनी सब एक", correct: false},
        ] 
    },

    {
        question:"आगू करब आपन देस कबितायं सुकुमार जी एक गठरी केकरा बांधेक बात करल हथि?",
        answers: [
            { text: "गीता, बाइबिल, कुरान", correct: true},
            { text: "हिंदू, मुसलमान, ईसाइ", correct: false},
            { text: "देसेक भिनु-भिनु राइज के", correct: false},
            { text: "खोरठा, हिंदी, उरदू", correct: false},
        ] 
    },

    {
        question:"ककर गुनें बरइ दिया-दपरा हो, ककर गुनें बरइ, बाती हो। ककर गुनें बरइ तेल बरताना हो बर-हइए, अमावइसाक रातीं हो......... ई लोकगीतेक लेताइरें बतावा कि केकर गुनें बाती बरो हे?",
        answers: [
            { text: "कुम्हार", correct: false},
            { text: "जोल्हा", correct: true},
            { text: "तेली", correct: false},
            { text: "कमार", correct: false},
        ] 
    },

    {
        question:"'धनी चल गे ओसाम' नामक खोरठा कहनिक रचनकार बतावा-",
        answers: [
            { text: "चतुर्भुज साहू", correct: false},
            { text: "वंशीलाल वंशी", correct: false},
            { text: "डॉ. बी.एन. ओहदार ", correct: true},
            { text: "दिनेश दिनमणि", correct: false},
        ] 
    },

    {
        question:"'बोन पतरा' नामक खोरठा कबिता संगरह के रचनाकार बतावा-",
        answers: [
            { text: "डॉ. बिनोद कुमार", correct: true},
            { text: "डॉ. ए. के. झा", correct: false},
            { text: "डॉ. बी. एन. ओहदार", correct: false},
            { text: "डॉ. गजाधर महतो प्रभाकर", correct: false},
        ] 
    },

    {
        question:"कतना पानी। घो-घो रानी कतना कादा। साहेब दादा एक डंडा पानी। घो-घो रानी सुपली भइर कादा साहेब दादा। ई कइसन गीत हे?",
        answers: [
            { text: "खेल गीत", correct: true},
            { text: "काम धंधाक पानी", correct: false},
            { text: "करम गीत", correct: false},
            { text: "सोहराय गीत", correct: false},
        ] 
    },

    {
        question:"दे दादा सिकी टी जाइब केंदोली तोर बहुक आइन देबड़ सोनाक मदोली। ई कइसन लोकगीत हे?",
        answers: [
            { text: "बादल गीत", correct: false},
            { text: "ढेलुवा गीत", correct: true},
            { text: "बांदर नचवा गीत", correct: false},
            { text: "रिझुवारी गीत", correct: false},
        ] 
    },

    




];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 