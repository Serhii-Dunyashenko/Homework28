const imagesArray = ["./images/img_1.jpg", "./images/img_2.jpg", "./images/img_3.jpg", "./images/img_4.jpg", "./images/img_5.jpg"];

const nextImgBtn = document.querySelector("#next_btn");
const previousImgBtn = document.querySelector("#previous_btn");
let currentImg = 0;

const fadeAnimationTiming = {
    duration: 400,
    iterations: 1,
  }
  const fadeAnimationFrames = [
    { opacity: '.4' },
    { opacity: '1' }
  ];
function hideButton() {
    switch (currentImg) {
        case 0:
            previousImgBtn.style.display = "none";
            nextImgBtn.style.display = "block";
            break;
        case imagesArray.length - 1:
            nextImgBtn.style.display = "none";
            previousImgBtn.style.display = "block";
            break;
        default:
        nextImgBtn.style.display = "block";
        previousImgBtn.style.display = "block";
    }
}

function nextImg () {
    currentImg++;
    document.getElementById("slider_img").src = imagesArray[currentImg]
    hideButton()
    slider_img.animate(fadeAnimationFrames, fadeAnimationTiming)

}

function previousImg () {
    currentImg--;
    document.getElementById("slider_img").src = imagesArray[currentImg]
    hideButton()
    slider_img.animate(fadeAnimationFrames, fadeAnimationTiming)
};

nextImgBtn.addEventListener('click', nextImg);
previousImgBtn.addEventListener('click', previousImg);

