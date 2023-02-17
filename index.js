const quote = document.querySelector(".quote");
const quoteBtn = document.querySelector(".new-quote");
const author = document.querySelector(".author");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twiterBtn = document.querySelector(".twitter");
const quoteNo = document.querySelector(".q-id");


//random quote function;
function randomquote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    //fetching data from api and parsing it into js object
    fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use the data here

    quote.innerText = data.content;
    author.innerText = "Franklin Bush";
    quoteBtn.innerText = "New quote";
    quoteBtn.classList.remove("loading");
    quoteNo.innerText = `#${data.length}`;
  })
  
}


quoteBtn.addEventListener("click", randomquote);
soundBtn.addEventListener("click", ()=>{
    //SpeechSynthesisUtterance is a web speech api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by franklin kithaka`);
    speechSynthesis.speak(utterance);//speak method of speechsynthesis speaks the utternace 
})

copyBtn.addEventListener("click", ()=>{
    // Copy the text inside the text field
  navigator.clipboard.writeText(quote.innerText);
})


twiterBtn.addEventListener("click", ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url= ${quote.innerText}`;
    window.open(tweeturl, "blank");//opening a new twitter tab with passing quote in the url
})
