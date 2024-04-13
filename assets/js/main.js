// Sliders
// JavaScript untuk fungsionalitas slider
const slidesContainer = document.querySelector(".slides");
const images = [
  "assets/img/toko_kopi/slider/slider1.jpg",
  "assets/img/toko_kopi/slider/slider2.jpg",
  "assets/img/toko_kopi/slider/slider3.jpg",
];

// Loop melalui array gambar dan membuat elemen slide secara dinamis
images.forEach((image) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const img = document.createElement("img");
  img.src = image;
  img.alt = "Gambar Kopi";
  slide.appendChild(img);
  slidesContainer.appendChild(slide);
});

// JavaScript untuk fungsionalitas slider
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let slideIndex = 0;

function tampilkanSlide() {
  slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

tampilkanSlide();

// Fungsionalitas tombol selanjutnya dan sebelumnya
nextButton.addEventListener("click", () => {
  slideIndex++;
  tampilkanSlide();
});

prevButton.addEventListener("click", () => {
  slideIndex--;
  tampilkanSlide();
});
// Sliders

// Sub Menu
// Ambil semua elemen menu-item
const menuItems = document.querySelectorAll(".menu-item");

// Array dari sumber gambar untuk setiap menu-item
const menuImages = [
  "assets/img/menu/espresso.jpg",
  "assets/img/menu/cappucino.jpg",
  "assets/img/menu/latte.jpg",
  "assets/img/menu/mocca.jpg",
];

// Loop melalui setiap menu-item
menuItems.forEach((menuItem, index) => {
  // Buat elemen gambar
  const img = document.createElement("img");
  img.src = menuImages[index]; // Set sumber gambar sesuai dengan urutan
  img.alt = menuItem.querySelector("h3").textContent; // Ambil teks judul untuk alt

  // Sisipkan gambar ke dalam menu-item sebagai elemen pertama
  menuItem.insertBefore(img, menuItem.firstChild);
});
// Sub Menu