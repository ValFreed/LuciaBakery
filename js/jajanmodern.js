// Slideshow pertama
let index1 = 0;
const images1 = document.querySelectorAll('.image-slideshow .image');

function displayImages1() {
  for (let i = 0; i < images1.length; i++) {
    images1[i].style.display = 'none';
  }
  index1++;
  if (index1 > images1.length) {
    index1 = 1;
  }
  images1[index1 - 1].style.display = 'block';
  setTimeout(displayImages1, 2000);
}

// Panggil fungsi untuk memulai slideshow pertama dan kedua
displayImages1();