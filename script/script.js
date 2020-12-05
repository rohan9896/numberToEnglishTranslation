var input = document.querySelector("#input-number");
var translateBtn = document.querySelector("#btn");
var output = document.querySelector("#output-text");


var url = "https://api.funtranslations.com/translate/numbers.json";


var urlConstructor = (text) => {
    return url + "?text=" + text;
}




var errorHandler = () => {
    alert("Api limit exceeded, try after some time");
    console.log("error");
}

var clickHandler = () => {
    var inputNum = input.value;

    var reqUrl = urlConstructor(inputNum);

    console.log(reqUrl)

    fetch(reqUrl)
    .then(response => response.json())
    .then(data => {
        var outputText = data.contents.translated;
        output.innerText = outputText;
    })
    .catch(errorHandler);


    // console.log(reqUrl)

}



translateBtn.addEventListener("click", clickHandler)