let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.rate = 1;
    //speakInput.pitch = 1;
    //speakInput.volume = 1;
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput);
}
window.onload = ()=>{
    speakFunc("Hello Astha");
    greetingFunc();
}

const greetingFunc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour>=0 && hour<12){
        speakFunc("Good morning, How can i help you!")
    }else if(hour>=12 && hour<16){
        speakFunc("Good afternoon, How can i help you!")
    }else{
        speakFunc("Good evening, How can i help you!")
    }
}

const startVoiceInput = () =>{
    if('webkitSpeechRecognition' in window)
    {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) =>{
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recognition.start();
    }else{
        alert("Your Browser does not support voice input !")
    }
}

btn.onclick = () =>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}

const handleCommands = (command) =>{
    console.log(command);
    if(command.includes("hello") || command.includes("hey") || command.includes("hi"))
    {
            speakFunc("Hello,How can i help you");
    }
    else if(command.includes("who are you") || command.includes("developed") || command.includes("hu r u "))
    {
            speakFunc("I am Virtual assistant,developed by Astha");
    }
    else if(command.includes("open google") || command.includes("google"))
    {
            speakFunc("opening... google");
            window.open("https://www.google.com");
    }
    else if(command.includes("open youtube") || command.includes("youtube"))
    {
            speakFunc("opening... youtube");
            window.open("https://www.youtube.com");
    }
    else if(command.includes("open calculator") || command.includes("calculator"))
    {
            speakFunc("opening... Calculator");
            window.open("calculator://");
    }
    else if(command.includes("tell me time") || command.includes("time"))
    {
            let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
            speakFunc(time);
    }
    else
    {
            speakFunc(`This is, What i found on internet regarding ${command}`);
            window.open(`https://www.google.com/search?q=${command}`);
    }
    



    
}