function myFirstFunction() {
    console.log("Thank you for your click!");

    var div = document.getElementById("myDiv");
    div.classList.add("myClass");
    console.log(div);

    var myDiv = document.getElementsByTagName("div");
    console.log(myDiv);

    var second_div = document.querySelector("#mySecondDiv");
    console.log(second_div);

    console.log($("#myThirdDiv"));
}

function mySecondFunction() {
    console.log("machine")
}

function $(selector){
    return document.querySelectorAll(selector);
}

