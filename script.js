// Add a new recommendation by copying one item in this list.
const coffeeShops = [
  {
    name: "Cats & Crumbs",
    city: "Marikina City",
    label: "best overall",
    summary: "Homemade comfort food, Sagada coffee, and foster cats looking for their forever homes.",
    location: "2/F Terrazza Phase 2, C&B Circle Mall, Marikina Heights",
    rating: "4.7 / 5",
    ratingNote: "external review average",
    personalReview: "My top pick for a slow afternoon. The rescue-and-adoption mission gives the space more purpose than a themed café, while the homemade dishes and Sagada drinks make it easy to stay beyond one cup.",
    sourceTitle: "what other visitors say",
    externalReview: "“Great food and the cats are so entertaining.”",
    sourceUrl: "https://www.sluurpy.com/en/marikina/restaurant/7114481/cats-and-crumbs",
    sourceLabel: "read 82 collected reviews ↗",
    tags: ["rescue cats", "comfort food", "Sagada coffee"],
    photos: [
      { src: "assets/cats&crumbs1.jpg", alt: "Cats and Crumbs café atmosphere" },
      { src: "assets/cats&crumbs2.jpg", alt: "Cat area inside Cats and Crumbs" },
      { src: "assets/cat&crumbs3.jpg", alt: "A resident cat at Cats and Crumbs" }
    ]
  },
  {
    name: "Catpuccino Coffee House",
    city: "Taguig City",
    label: "most intimate",
    summary: "A warm, close-knit café experience known for its Persian cat residents and caring team.",
    location: "Taguig City, Metro Manila",
    rating: "editor's pick",
    ratingNote: "for a smaller, personal atmosphere",
    personalReview: "Best for visitors who prefer a quieter room and more time noticing each cat's personality. The small-scale setting feels personal, so this is the spot I would choose over a louder, busier café.",
    sourceTitle: "from another visitor",
    externalReview: "“An intimate hideaway” with a team whose care extends to cats beyond the café.",
    sourceUrl: "https://www.linkedin.com/posts/iammissseven_cleopatracat-catcafetaguig-coffeeandcats-activity-7375965820973264897-1iPS",
    sourceLabel: "read the visitor story ↗",
    tags: ["Persian cats", "intimate space", "community care"],
    photos: [
      { src: "assets/cats&crumbs2.jpg", alt: "Warm cat café seating" },
      { src: "assets/cat&crumbs3.jpg", alt: "Cat relaxing in a café" },
      { src: "assets/cats&crumbs1.jpg", alt: "A cozy café interior" }
    ]
  },
  {
    name: "Cat Cafe Manila",
    city: "Quezon City",
    label: "best advocacy story",
    summary: "A Maginhawa pioneer built around rescued puspins, responsible interaction, and adoption.",
    location: "2/F 189 Maginhawa Street corner Makadios Street, Sikatuna Village",
    rating: "advocacy pick",
    ratingNote: "for rescue education and adoption",
    personalReview: "This recommendation is about the mission first. Its focus on rescued puspins gives visitors a thoughtful introduction to responsible cat interaction, making it a meaningful stop for first-time cat café guests.",
    sourceTitle: "reported by Inquirer",
    externalReview: "The café was created to showcase rescued stray cats and help them find forever homes.",
    sourceUrl: "https://newsinfo.inquirer.net/698297/puspins-main-attractions-in-cat-cafe",
    sourceLabel: "read the feature ↗",
    tags: ["rescued puspins", "adoption advocacy", "Maginhawa"],
    photos: [
      { src: "assets/cat&crumbs3.jpg", alt: "Cat café resident resting" },
      { src: "assets/cats&crumbs1.jpg", alt: "Relaxed cat café setting" },
      { src: "assets/cats&crumbs2.jpg", alt: "Cats in a social café space" }
    ]
  }
];

const locationGrid = document.querySelector("#location-grid");
const modal = document.querySelector("#location-modal");
let selectedShop = null;
let selectedPhoto = 0;

locationGrid.innerHTML = coffeeShops.map((shop, index) => `
  <button class="location-card" type="button" data-shop-index="${index}">
    <div class="card-image">
      <img src="${shop.photos[0].src}" alt="${shop.photos[0].alt}">
      <span class="rank">${String(index + 1).padStart(2, "0")}</span>
      <span class="card-tag">${shop.label}</span>
    </div>
    <div class="card-copy">
      <div>
        <p>${shop.city.toUpperCase()}</p>
        <h2>${shop.name}</h2>
      </div>
      <span class="card-arrow">↗</span>
    </div>
    <p class="card-summary">${shop.summary}</p>
  </button>
`).join("");

function showPhoto() {
  const photo = selectedShop.photos[selectedPhoto];
  const modalPhoto = document.querySelector("#modal-photo");

  modalPhoto.src = photo.src;
  modalPhoto.alt = photo.alt;
}

function openModal(index) {
  selectedShop = coffeeShops[index];
  selectedPhoto = 0;

  document.querySelector("#modal-eyebrow").textContent =
    `${String(index + 1).padStart(2, "0")} · ${selectedShop.city.toUpperCase()}`;
  document.querySelector("#modal-title").textContent = selectedShop.name;
  document.querySelector("#modal-location").textContent = selectedShop.location;
  document.querySelector("#modal-rating").textContent = selectedShop.rating;
  document.querySelector("#modal-rating-note").textContent = selectedShop.ratingNote;
  document.querySelector("#modal-personal-review").textContent = selectedShop.personalReview;
  document.querySelector("#modal-source-title").textContent = selectedShop.sourceTitle;
  document.querySelector("#modal-external-review").textContent = selectedShop.externalReview;
  document.querySelector("#modal-source-link").href = selectedShop.sourceUrl;
  document.querySelector("#modal-source-link").textContent = selectedShop.sourceLabel;
  document.querySelector("#modal-tags").innerHTML =
    selectedShop.tags.map(tag => `<span>${tag}</span>`).join("");

  showPhoto();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function changePhoto(direction) {
  selectedPhoto =
    (selectedPhoto + direction + selectedShop.photos.length) % selectedShop.photos.length;
  showPhoto();
}

locationGrid.addEventListener("click", event => {
  const card = event.target.closest(".location-card");

  if (card) {
    openModal(Number(card.dataset.shopIndex));
  }
});

document.querySelector(".carousel-previous").addEventListener("click", () => changePhoto(-1));
document.querySelector(".carousel-next").addEventListener("click", () => changePhoto(1));
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (!modal.classList.contains("open")) return;

  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") changePhoto(-1);
  if (event.key === "ArrowRight") changePhoto(1);
});
