const text =
[
"Information Technology Professional",
"Web Developer",
"IT Support Specialist",
"Future Software Engineer",
"Technology Innovator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type, 1500);

}else{

setTimeout(type, 100);
}

})();

ScrollReveal().reveal('.glass-card', {
distance:'80px',
duration:1500,
origin:'bottom'
});

ScrollReveal().reveal('.skill-card', {
interval:100
});

ScrollReveal().reveal('.timeline-item', {
interval:300
});
