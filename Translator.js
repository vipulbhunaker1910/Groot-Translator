var input_text=document.querySelector("#input-txt-area");
var btn_translator=document.querySelector("#btn-translate");
var output_text=document.querySelector("#output-txt-area");

var url="https://api.funtranslations.com/translate/groot.json";

function url_query(input){
    return url+"?text="+input;
}

function translate(){
    var inputTxt = input_text.value; 
    console.log(inputTxt);
    fetch(url_query(inputTxt))
    .then(response => response.json()) 
    .then(json=>{
        var transaltedtext=json.contents.translated;
        output_text.innerHTML=transaltedtext
    });

};
btn_translator.addEventListener("click",translate)