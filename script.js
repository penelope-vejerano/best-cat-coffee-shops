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
    summary: "Coffee, comfort, and feline company in a small neighborhood café with a relaxed pace.",
    location: "1 MRT Avenue, Capistrano Street, Hagonoy, Taguig City",
    rating: "editor's pick",
    ratingNote: "for a smaller, personal atmosphere",
    personalReview: "My pick for cat lovers who prefer a quieter neighborhood stop over a large themed venue. The cozy scale should make it easier to slow down with a drink and notice each resident cat's personality.",
    sourceTitle: "from another visitor",
    externalReview: "“An intimate hideaway” with a team whose care extends to cats beyond the café.",
    sourceUrl: "https://www.linkedin.com/posts/iammissseven_cleopatracat-catcafetaguig-coffeeandcats-activity-7375965820973264897-1iPS",
    sourceLabel: "read the visitor story ↗",
    tags: ["neighborhood café", "intimate space", "Taguig"],
    photos: [
      { src: "assets/catpuccino1.jpg", alt: "Warm cat café seating" },
      { src: "assets/catpuccino2.jpg", alt: "Cat relaxing in a café" },
      { src: "assets/catpuccino3.jpg", alt: "A cozy café interior" }
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
      { src: "assets/catcafe1.jpg", alt: "Cat café resident resting" },
      { src: "assets/catcafe2.jpg", alt: "Relaxed cat café setting" },
      { src: "assets/catcafe3.jpg", alt: "Cats in a social café space" }
    ]
  },
  {
    name: "Miao Cat Cafe",
    city: "Quezon City",
    label: "pioneer pick",
    summary: "A Congressional Avenue pioneer remembered for a homey cat room, cakes, and two-hour visits.",
    location: "2/F Cake2Go, #7 Congressional Avenue, Quezon City",
    rating: "4.1 / 5",
    ratingNote: "117 historical reviews collected by Sluurpy",
    personalReview: "I would have come here for the generous two-hour cat time and stayed for dessert. The chocolate chip muffins, lava cake, and banana pecan muffin make this the strongest sweet-tooth pick in the guide.",
    sourceTitle: "what past visitors said",
    externalReview: "Visitors described the café as homey and cozy, with plenty of cat furniture; cakes and muffins were among the most praised orders.",
    sourceUrl: "https://www.sluurpy.com/en/quezon-city/restaurant/7108566/miao-cat-cafe",
    sourceLabel: "browse 117 collected reviews ↗",
    tags: ["archive pick", "desserts", "Congressional Avenue"],
    photos: [
      { src: "assets/miao1.jpg", alt: "Cozy cat café atmosphere" },
      { src: "assets/miao2.jpg", alt: "A cat resting inside a café" },
      { src: "assets/miao3.jpg", alt: "Cat-friendly café seating" }
    ]
  },
  {
    name: "Bengal Brew",
    city: "Quezon City",
    label: "best for Bengal fans",
    summary: "A Cubao café built around playful Bengal cats in a tropical, mini-jungle-inspired lounge.",
    location: "G/F Manhattan Parkview, Manhattan Garden City, Cubao, Quezon City",
    rating: "4.2 / 5",
    ratingNote: "580 historical reviews collected by Sluurpy",
    personalReview: "This is the obvious choice for anyone fascinated by Bengals. I love that the mini-jungle room suits the breed's energy; I would pair the cat hour with the visitor-favorite caramel frappe and sans rival.",
    sourceTitle: "what past visitors said",
    externalReview: "Visitors praised the number of friendly Bengals, the photo-friendly jungle design, and staff who could answer questions about the cats.",
    sourceUrl: "https://mysafespacejournal.com/2019/03/14/bengal-brew-cat-cafe-purr-fect-for-you/",
    sourceLabel: "read the full visitor review ↗",
    tags: ["archive pick", "Bengal cats", "Cubao"],
    photos: [
      { src: "assets/bengal1.jpg", alt: "A playful cat in a café lounge" },
      { src: "assets/bengal2.jpg", alt: "Cat café play area" },
      { src: "assets/bengal3.jpg", alt: "A relaxed café interior" }
    ]
  },
  {
    name: "Nekohige Cafe",
    city: "Manila",
    label: "best study nook",
    summary: "A Japanese-inspired upstairs café pairing resident cats with affordable comfort food and drinks.",
    location: "2/F, 1173 Vicente Cruz Street corner Dapitan Street, Sampaloc, Manila",
    rating: "editor's pick",
    ratingNote: "for students and quiet hangouts",
    personalReview: "My university-belt pick for a low-key study break. The homey anime details, filling Japanese comfort food, and late-day café atmosphere sound ideal when I want cat company without a formal restaurant experience.",
    sourceTitle: "from a local café guide",
    externalReview: "The café is described as a cozy, quiet hobby lounge with friendly roaming cats and student-budget ramen, curry, rice bowls, coffee, milk tea, and matcha.",
    sourceUrl: "https://outoftownblog.com/for-your-purrfect-weekend-list-of-cat-cafes-in-metro-manila/",
    sourceLabel: "read the café guide ↗",
    tags: ["Japanese-inspired", "student-friendly", "Sampaloc"],
    photos: [
      { src: "assets/nekohige1.jpg", alt: "A cozy cat café lounge" },
      { src: "assets/nekohige2.jpg", alt: "Warm café seating" },
      { src: "assets/nekohige3.jpg", alt: "A resident café cat" }
    ]
  },
  {
    name: "Coterie Cat Cafe",
    city: "Parañaque City",
    label: "best south hangout",
    summary: "A mellow Aguirre Avenue coffee and co-working spot with light bites and resident cats.",
    location: "272 Aguirre Avenue, BF Homes, Parañaque City",
    rating: "editor's pick",
    ratingNote: "for coffee, cats, and quiet work",
    personalReview: "I would choose Coterie for a slow work session or casual date in the South. Its all-day café feel and roaming cats make it sound more flexible than a timed cat-lounge visit.",
    sourceTitle: "from a local café guide",
    externalReview: "The space is described as cozy and home-like, with soft lighting, comfortable seating, simple café fare, and a calm atmosphere for working or unwinding.",
    sourceUrl: "https://outoftownblog.com/for-your-purrfect-weekend-list-of-cat-cafes-in-metro-manila/",
    sourceLabel: "read the café guide ↗",
    tags: ["co-working", "BF Homes", "all-day café"],
    photos: [
      { src: "assets/coterie1.jpg", alt: "Comfortable cat café seating" },
      { src: "assets/coterie2.jpg", alt: "A calm café cat area" },
      { src: "assets/coterie3.jpg", alt: "Cat relaxing near café guests" }
    ]
  },
  {
    name: "Gilmore Cat Café",
    city: "Quezon City",
    label: "archive listing",
    summary: "A former Granada Street cat café whose surviving listings and visitor reports are now historical.",
    location: "No. 6 Xavier Hills Condominium, Granada Street, Valencia, Quezon City",
    rating: "verify first",
    ratingNote: "current operating status is unclear",
    personalReview: "I would treat this as a piece of Metro Manila cat-café history, not a guaranteed stop. The address is well documented, but conflicting old hours and a report of an unexpected closure mean calling ahead is essential.",
    sourceTitle: "from a past visitor",
    externalReview: "One visitor reported arriving at the posted opening time and finding the café closed, even after receiving conflicting opening information.",
    sourceUrl: "https://liasfoodjourney.blogspot.com/2015/12/cat-cafe-not.html",
    sourceLabel: "read the historical visitor report ↗",
    tags: ["archive pick", "call ahead", "Granada Street"],
    photos: [
      { src: "assets/gilmore1.jpg", alt: "Cat café archive illustration" },
      { src: "assets/gilmore2.jpg", alt: "Historic cat café atmosphere" },
      { src: "assets/gilmore3.jpg", alt: "Cat lounge seating" }
    ]
  },
  {
    name: "Le Cat Coffee Shop",
    city: "Las Piñas City",
    label: "south pioneer",
    summary: "A pioneering southern cat café remembered for friendly cats, coffee, pastries, and family visits.",
    location: "76 Gloria Diaz Street, BF Resort Village, Las Piñas City (historical address)",
    rating: "4 / 5",
    ratingNote: "rating from a historical visitor review",
    personalReview: "This would be my family-bonding pick in the South. I like the separate café-and-cat-lounge setup, and the reports of friendly cats make it sound especially welcoming for a relaxed first visit.",
    sourceTitle: "from a past visitor",
    externalReview: "A visitor called it a fun, stress-relieving family activity and praised the soft grilled panini with its sweet strawberry-jam twist.",
    sourceUrl: "http://eatsdelicious.blogspot.com/2015/08/cats-and-coffee-at-le-cat-coffee-shop.html",
    sourceLabel: "read the full visitor review ↗",
    tags: ["archive pick", "family-friendly", "BF Resort"],
    photos: [
      { src: "assets/lecat2.jpg", alt: "Family-friendly cat café lounge" },
      { src: "assets/lecat3.jpg", alt: "Friendly café cat" },
      { src: "assets/lecat1.jpg", alt: "Coffee shop seating area" }
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
