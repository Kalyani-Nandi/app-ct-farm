let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;

// Function to show the next slide
function showNextSlide() {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("show")) {
      changeSlide = index + 1;
      slide.classList.remove("show");
    }
  });

  if (changeSlide < slides.length) {
    slides[changeSlide].classList.add("show");
  } else {
    changeSlide = 0;
    slides[changeSlide].classList.add("show");
  }
}

// Function to show the previous slide
function showPrevSlide() {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("show")) {
      changeSlide = index - 1;
      slide.classList.remove("show");
    }
  });

  if (changeSlide >= 0) {
    slides[changeSlide].classList.add("show");
  } else {
    changeSlide = slides.length - 1;
    slides[changeSlide].classList.add("show");
  }
}

// Add event listeners for buttons
nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

// Automatically slide images every 4 seconds
let autoSlide = setInterval(showNextSlide, 4000);

// Pause auto-slide when user interacts with the buttons
[nextBtn, prevBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(showNextSlide, 4000); // Restart the auto-slide
  });
});

// Rendering the movable news feed

const newsItems = [
  "Breaking News: Bitcoin mining profitability hits a new high this quarter!",
  "Weather Update: Crypto mining farms brace for extreme heat in the southern region.",
  "Sports: E-sports team breaks records by winning a blockchain-based tournament!",
  "Technology: New mining hardware promises faster hashing speeds and lower power consumption.",
  "Health: Experts warn about the environmental impact of large-scale cryptocurrency mining operations.",
];


let currentNewsIndex = 0; // Track the current news index
const newsTicker = document.getElementById("newsTicker");

// Function to update the news text
function updateNews() {
  newsTicker.textContent = newsItems[currentNewsIndex];
  currentNewsIndex = (currentNewsIndex + 1) % newsItems.length; // Cycle through news
}

// Update the news every 5 seconds
setInterval(updateNews, 5000);

// Rendering company lists

const companies = [
    {
      name: "Bitmain",
      logo: "../assets/miningImages/bitcoin.png",
    },
    {
      name: "Canaan",
      logo: "../assets/miningImages/cryptocurrency-4.png",
    },
    {
      name: "Genesis",
      logo: "../assets/miningImages/cryptocurrency-3.png",
    },
    {
      name: "HashFl",
      logo: "../assets/miningImages/cryptocurrency-2.png",
    },
    {
      name: "NiceHs",
      logo: "../assets/miningImages/trade-1.png",
    },
    {
      name: "Hut8Mx",
      logo: "../assets/miningImages/trade.png",
    },
    {
      name: "Marath",
      logo: "../assets/miningImages/whale.png",
    },
    {
      name: "RiotBk",
      logo: "../assets/miningImages/nft.png",
    },
    {
      name: "ArgoBx",
      logo: "../assets/miningImages/crypto-transfer.png",
    },
    {
      name: "CoreSc",
      logo: "../assets/miningImages/cryptocurrency-1.png",
    },
  ];
  

// Get the container
const companyList = document.getElementById("companyList");

// Map and render companies
companies.forEach((company) => {
  // Create a container for each company
  const companyDiv = document.createElement("div");
  companyDiv.className = "company";

  // Create the logo image
  const logoImg = document.createElement("img");
  logoImg.src = company.logo;
  logoImg.alt = `${company.name} Logo`;

  // Create the name element
  const nameSpan = document.createElement("span");
  nameSpan.textContent = company.name;

  // Append the logo and name to the container
  companyDiv.appendChild(logoImg);
  companyDiv.appendChild(nameSpan);

  // Append the container to the main list
  companyList.appendChild(companyDiv);
});
