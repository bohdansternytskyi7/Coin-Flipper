const btnFlip = document.querySelector('.btn');
const img = document.querySelector('.coin-img');

btnFlip.addEventListener('click', flipCoin);

// Flipping coin
function flipCoin() {
    // flip effect
    img.classList.toggle('flip');

    // Timeout is used to change the image when the coin is flipping
    setTimeout(changeImage, 300);
}

// Change Image
function changeImage() {
    let randomNumber = Math.floor(Math.random() * 2 + 1);
    img.src = `./img/coin-${randomNumber}.png`;
}