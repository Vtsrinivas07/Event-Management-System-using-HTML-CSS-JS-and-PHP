let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function validateForm() {
  var startingDate = document.getElementById("starting-date").value;
  var endingDate = document.getElementById("ending-date").value;
  var events = document.getElementById("events").value;
  var numberOfPeople = document.getElementById("no_of_people").value;
  var pricing = document.getElementById("pricing").value;
  if (
    startingDate === "" ||
    endingDate === "" ||
    events === "" ||
    numberOfPeople === "" ||
    pricing === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }
  return true;
}
flatpickr("#starting-date", {
  dateFormat: "Y-m-d",
  minDate: "today",
});

flatpickr("#ending-date", {
  dateFormat: "Y-m-d",
  minDate: "today",
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); 
    }
  });

function booknowpopup() {
  document.getElementById("bookform").style.display = "flex";
}

function popupclose() {
  document.getElementById("bookform").style.display = "none";
}

const formData = getUrlParams();
const bookingDetailsDiv = document.getElementById("bookingDetails");
bookingDetailsDiv.innerHTML = `
  <p><strong>Starting Date:</strong> ${formData["starting-date"]}</p>
  <p><strong>Ending Date:</strong> ${formData["ending-date"]}</p>
  <p><strong>Events:</strong> ${formData["events"]}</p>
  <p><strong>No. of People:</strong> ${formData["no_of_people"]}</p>
  <p><strong>Pricing:</strong> ${formData["pricing"]}</p>
`;

const bookingForm = document.getElementById("bookingForm");
bookingForm.submit();




