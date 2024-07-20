// membuat bg pada scroll default navbar
const navbar = document.getElementById("default-navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 99) {
    navbar.classList.add("bg-white");
    navbar.classList.remove("text-white");
    navbar.classList.add("text-stone-700");
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.remove("text-stone-700");
    navbar.classList.add("text-white");
    navbar.classList.remove("shadow-md");
  }
});

const music = document.getElementById("music");
const toggleButton = document.getElementById("toggle-button");
const playSvg = document.getElementById("play");
const pauseSvg = document.getElementById("pause");

// toggle buka dan putar musik
function toggleOpen() {
  let open = document.getElementById("intro");
  open.classList.remove("translate-y-[0]");
  open.classList.add("-translate-y-full");
  setTimeout(function () {
    music.play();
  }, 1000);
  playSvg.classList.add("hidden");
  pauseSvg.classList.remove("hidden");
}

// toggle musik
function playmusic() {
  if (music.paused) {
    pauseSvg.classList.remove("hidden");
    playSvg.classList.add("hidden");
    music.play();
  } else {
    pauseSvg.classList.add("hidden");
    playSvg.classList.remove("hidden");
    music.pause();
  }
}

toggleButton.addEventListener("click", playmusic);

// countdown
let countDownDate = new Date("2024-01-12T00:00:00Z").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-hari").innerHTML = days;
  document.getElementById("countdown-jam").innerHTML = hours;
  document.getElementById("countdown-menit").innerHTML = minutes;
  document.getElementById("countdown-detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Acara Telah Selesai";
  }
}, 1000);

// salin text
function myFunction1() {
  const copyText = document.getElementById("myInput1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById("copied1");
  tooltip.innerHTML = "Telah tersalin";
  setTimeout(() => {
    tooltip.innerHTML = "Salin no rekening";
  }, 1000);
}

// salin text
function myFunction2() {
  const copyText = document.getElementById("myInput2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById("copied2");
  tooltip.innerHTML = "Telah tersalin";
  setTimeout(() => {
    tooltip.innerHTML = "Salin no rekening";
  }, 1000);
}

// response dengan sweet alert
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Good!",
        text: "Kehadiran berhasil dikirim",
      });
      const resetButton = document.getElementById("#resetButton");
      resetButton.click();
    });
  });
});

// url
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector("#text");
namaContainer.innerHTML = `${pronoun} ${nama}`;

const namaContainer2 = document.querySelector("#text-2");
namaContainer2.innerHTML = `${pronoun} ${nama}`;

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  speed: 1000,
  spaceBetween: 25,
  slidesPerView: 1,
  lazy: {
    loadPrevNext: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});
