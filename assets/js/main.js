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

