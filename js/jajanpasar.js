// Slideshow kedua
let index2 = 0;
const images2 = document.querySelectorAll('.image-slideshow2 .image2');

function displayImages2() {
  for (let i = 0; i < images2.length; i++) {
    images2[i].style.display = 'none';
  }
  index2++;
  if (index2 > images2.length) {
    index2 = 1;
  }
  images2[index2 - 1].style.display = 'block';
  setTimeout(displayImages2, 3000);
}
// Panggil fungsi untuk memulai slideshow kedua
displayImages2();