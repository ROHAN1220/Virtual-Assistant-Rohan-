const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const btn2 = document.querySelector('.talk2');
const content2 = document.querySelector('.content2');


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const recognition2 = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})



recognition2.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content2.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn2.addEventListener('click', () => {
    content2.textContent = ""
    recognition2.start();
})




function takeCommand(message) {
    if (message.includes('hey rohan') || message.includes('hello rohan')) {
        speak("Hello Sir, i am Virtual Assistant Rohan,  How May I Help You?");
    }

    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if (message.includes("open my colleg")) {
        window.open("https://geetanjaligroupofcolleges.in", "_blank");
        speak("Opening Geetanjali Group of Colleges...")
    }

    else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening Linkedin...")
    }

    else if (message.includes("open ippb")) {
        window.open("https://ippbonline.com", "_blank");
        speak("Opening India Post Payment Bank app...")
    }

    else if (message.includes("open phonepe")) {
        window.open("https://phonepe.com", "_blank");
        speak("Opening Phonepey...")
    }

    else if (message.includes("open phonepe")) {
        window.open("https://phonepe.com", "_blank");
        speak("Opening Phonepey...")

    } 


    else if (message.includes("open whatsapp")) {
        window.open("https://whatsapp.com", "_blank");
        speak("Opening Whatsapp...")

    } 
    
    else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram")
    }
   
    else if (message.includes("open snapchat")) {
        window.open("https://snapchat.com", "_blank");
        speak("Opening Snapchat")
    }
    

    else if (message.includes("open threads")) {
        window.open("https://threads.net", "_blank");
        speak("Opening Threads")
    }


    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);

    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}

// loader


let preloader = document.getElementById("loding");

function MyFunction() {

    preloader.style.display = "none";

}


