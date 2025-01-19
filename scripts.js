// scripts for sticky header

const scrollTrigger = 93;
const navbar = document.querySelector(".custom-navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > scrollTrigger) {
    navbar.classList.add("strickyNav");
  } else {
    navbar.classList.remove("strickyNav");
  }
});

// scripts for product sliders

$(document).ready(function () {
  // Initialize the main slider
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: ".slider-nav",
  });

  // Initialize the thumbnail navigation slider
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
});

// script to change the price according to product

const setPrice = document.getElementById("product-price");

function handleProductClick(event) {
  const productPrice = event.target.getAttribute("price");
  setPrice.innerHTML = productPrice;

  if (productPrice === "Rs 3100") {
    document.querySelector(".custom-navbar").style.backgroundColor = "#FEED76";
    document.querySelector(".product-section").style.backgroundColor =
      "#FEED76";
  } else {
    document.querySelector(".custom-navbar").style.backgroundColor = "#fbf5e7";
    document.querySelector(".product-section").style.backgroundColor =
      "#fbf5e7";
  }
}

// owl slider

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: true, // Show navigation arrows
    responsive: {
      0: {
        items: 1, // 1 card on small screens
      },
      600: {
        items: 2, // 2 cards on medium screens
      },
      1000: {
        items: 4, // 4 cards on large screens
      },
    },
  });
});
