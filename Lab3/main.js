var num = 10;
let name = "nes"; //private
// let Array = [10, 15, "nes"];
const obj = {
    name: "nes",
    age: 224
};
const objMix = {
    data: [{
        name: "nes",
        gpa: 5.00
    }, {
        name: "bo",
        gpa: 3.00
    }]
};
console.log(objMix);
console.log(num);
console.log(name);
let string = num + name
console.log(string);
// string = objMix.data[1].name + Array[0];
console.log(string);
// string = "<p>" + Array[2] + "</p>";
console.log(string);
// string = `<p>${Array}</p>`;
console.log(string);

function Add(a, b) {
    return a + b;
}

console.log(Add(3, 10));
document.getElementById("div1").innerHTML = name;


$(function() {
    // alert("World");
    $('#div1').html("Mananchai");

    $('#bt1').click(function() {
        $('#div1').html("I Love Broh");
    });

    $('#bt2').click(() => { // arrow function
        $('.in1').val("I Love Broh");
    });
    $('#bt3').click(() => {
        $('.in1:odd').addClass("red");
    });

    $("#div_about").load("./Pages/about.html");
    $("#div_form").load("./Pages/form.html");

});