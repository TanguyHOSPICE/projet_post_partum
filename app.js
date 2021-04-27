// Slideshow Img
var i = 0; //start point
var images = []; //array of images
var time = 3000; //time between images

// Image list
images[0] = '/assets/media/image1.jpg';
images[1] = '/assets/media/image2.jpg';
images[2] = '/assets/media/image3.jpg';
images[3] = '/assets/media/image4.jpg';
images[4] = '/assets/media/image5.jpg';
images[5] = '/assets/media/image6.jpg';

//Change image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length -1) {
        i++;
    } else {
        i =0;
    }
    //Time apperance function
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
