const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound'); 
const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');


catImg.addEventListener('click', ()=>{
    console.log('clicking the cat');
    catSound.play();

});

horseImg.addEventListener('click', ()=>{
    console.log('clicking the horse');
    horseSound.play(); 

});

dogImg.addEventListener('click', ()=>{
    console.log('clicking the dog');
    dogSound.play();

});

window.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        dogSound.play();
  
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        catSound.play();

    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play();

    }
});
