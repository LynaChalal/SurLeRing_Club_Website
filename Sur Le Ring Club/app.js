const reviews = [
    {
        name:"Lyna Chalal",
        img:"images/lyna.jpeg",
        text:"J'adore absolument Sur Le Ring Club ! Les entraîneurs sont incroyables, et la salle de sport dispose d'un équipement de première qualité. C'est un endroit fantastique pour s'entraîner et atteindre ses objectifs de remise en forme."
    },
    {
        name:"Ayoub Simani",
        img:"images/ayoub.jpeg",
        text:"ur Le Ring Club est la meilleure salle de sport en ville ! Le personnel est amical, l'ambiance est géniale, et les séances d'entraînement sont efficaces. Je le recommande vivement si vous voulez changez votre vie !"
    },
    {
        name:"Raouf Moussaoui",
        img:"images/raouf.jpg",
        text:"Le Club SLR offre une expérience d'entraînement incroyable avec un équipement de première classe et des entraîneurs compétents. Je n'ai jamais été aussi motivé pour atteindre mes objectifs de remise en forme."
    },
    {
        name:"Hichem Kadour",
        img:"images/hichem.jpg",
        text:"L'atmosphère au Sur Le Ring Club est incomparable ; ce n'est pas seulement une salle de sport, c'est une communauté. J'adore la variété des cours qu'ils proposent, du boxe à l'entraînement en circuit."
    },
    {
        name:"Sarah Moukhtari",
        img:"images/sarah.jpg",
        text:"Sur Le Ring Club a transformé ma routine de remise en forme. Le personnel sympathique, les installations propres et les entraînements stimulants me font revenir encore et encore. C'est vraiment une perle rare."
    }
]

const btn1= document.querySelector("#btn1")
const btn2= document.querySelector("#btn2")
const box1 = document.querySelector("#reviews1")
const box2 = document.querySelector("#reviews2")
const p1 = box1.querySelector("p") 
const img1 = box1.querySelector("img")
const person1 = box1.querySelector("h4")
const p2 = box2.querySelector("p") 
const img2 = box2.querySelector("img")
const person2 = box2.querySelector("h4")

// random review
let index = -1;
let index_hist1= -2;
let index_hist2= -3;
let p;
let person;
let img;

function randomreview(n){

    index = Math.floor(Math.random() * reviews.length)
    while (index_hist1==index || index_hist2==index) {
        index = Math.floor(Math.random() * reviews.length)
      }
      if(n==1){
        p = p1;
        person = person1;
        img = img1;
        index_hist1 = index;
    }
    else{
        p = p2;
        person = person2;
        img = img2;
        index_hist2 = index;
    }

    p.innerText=reviews[index].text
    person.innerText=reviews[index].name
    img.src=reviews[index].img
}


btn1.addEventListener("click", () => {
    randomreview(1);
});
btn2.addEventListener("click", () => {
    randomreview(2);
});

// next and previous reviews :
const precBtn=document.querySelector("#precedant")
const suivBtn=document.querySelector("#suivant")

let currentIndex = 0

function showReview(number){
    const item=reviews[number]
    img2.src=item.img
    person2.innerText=item.name
    p2.innerText=item.text

    if(number===reviews.length){
        number--
    }
    if(number===0){
        number++
    }
    
    const item2=reviews[number]
    img1.src=item2.img
    person1.innerText=item2.name
    p1.innerText=item2.text
}


// Event listeners for previous and next buttons
precBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

suivBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

