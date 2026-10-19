
"use strict";

// DEMONSTRATION DATA ONLY.
// Replace sample prices with verified listing prices before publishing.


const motorcycles = [
    {
    
       id: 1,
       brand: "Suzuki",
       name: "Suzuki Smash 115 Carb",
       year: 2022,
       mileage: "12,000 km",
       condition: "Good",
       originalPrice: 45000,
       price: 35000,
       image: "https://imgcdn.zigwheels.ph/medium/gallery/exterior/83/3285/suzuki-smash-carb-85250.jpg",
       officialUrl: "https://mc.suzuki.com.ph/"

    },
    {
        id: 2,
        brand: "Suzuki",
        name: "Suzuki Smash 115 FI",
        year: 2023,
        mileage: "8,000 km",
        condition: "Good",
        originalPrice: 52000,
        price: 42000,
        image: "https://imgcdn.zigwheels.ph/medium/gallery/exterior/83/3263/suzuki-smash-fi-32945.jpg",
        officialUrl: "https://mc.suzuki.com.ph/"
    },
    {
        id: 3,
        brand: "Yamaha",
        name: "Yamaha NMAX",
        year: 2022,
        mileage: "10,000 km",
        condition: "Good",
        originalPrice: 145000,
        price: 120000,
        image: "https://imgcdn.zigwheels.ph/large/gallery/exterior/86/3524/yamaha-nmax-slant-rear-view-full-image-400507.jpg?tr=w-510,h-340",
        officialUrl: "https://www.yamaha-motor.com.ph/"
    },
    {
        id: 4,
        brand: "Suzuki",
        name: "Suzuki Raider R150 FI",
        year: 2022,
        mileage: "9,000 km",
        condition: "Good",
        originalPrice: 115000,
        price: 95000,
        image: "https://imgcdn.zigwheels.ph/large/gallery/exterior/83/1892/suzuki-raider-r150-fi-slant-front-view-full-image-141976.jpg?tr=w-510,h-340",
        officialUrl: "https://mc.suzuki.com.ph/"
    },
    {
        id: 5,
        brand: "Honda",
        name: "Honda ADV 160",
        year: 2023,
        mileage: "7,000 km",
        condition: "Good",
        originalPrice: 165000,
        price: 140000,
        image: "https://motortrade.com.ph/wp-content/uploads/2026/03/ADV-160-ABS-Matte-Sabre-Green-Metallic-scaled.png",
        officialUrl: "https://www.hondaph.com/"
    },
    {
        id: 6,
        brand: "Honda",
        name: "Honda Click 125i",
        year: 2023,
        mileage: "8,500 km",
        condition: "Good",
        originalPrice: 90000,
        price: 75000,
        image: "https://motortrade.com.ph/wp-content/uploads/2023/07/CLICK-125i-2.jpg",
        officialUrl: "https://www.hondaph.com/"
    },
    {
        id: 7,
        brand: "Yamaha",
        name: "Yamaha Aerox 155",
        year: 2022,
        mileage: "9,000 km",
        condition: "Good",
        originalPrice: 135000,
        price: 110000,
        image: "https://motortrade.com.ph/wp-content/uploads/2025/09/AEROX-D541-BBK.jpg",
        officialUrl: "https://www.yamaha-motor.com.ph/"
    }
];


function formatPrice(amount) {
    return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0
    }).format(amount);
}

// Create one motorcycle card.
function createMotorcycleCard(bike) {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = bike.image;
    image.alt = bike.name;
    image.loading = "lazy";

    image.onerror = function () {
        this.style.display = "none";
        imageWrap.style.background = "#dce5de";
    };

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "SAMPLE LISTING";

    imageWrap.append(image, badge);

    const info = document.createElement("div");
    info.className = "product-info";

    const brand = document.createElement("p");
    brand.className = "product-brand";
    brand.textContent = bike.brand;

    const name = document.createElement("h3");
    name.textContent = bike.name;

    const details = document.createElement("p");
    details.className = "product-details";
    details.textContent =
        `${bike.year} model · ${bike.mileage} · ${bike.condition} condition`;

    const priceRow = document.createElement("div");
    priceRow.className = "price-row";

    const price = document.createElement("span");
    price.className = "current-price";
    price.textContent = formatPrice(bike.price);

    const oldPrice = document.createElement("span");
    oldPrice.className = "old-price";
    oldPrice.textContent = formatPrice(bike.originalPrice);

    priceRow.append(price, oldPrice);

    const savings = document.createElement("p");
    savings.className = "savings-label";

    const difference = bike.originalPrice - bike.price;
    const percentage = difference / bike.originalPrice * 100;

    savings.textContent =
        `${formatPrice(difference)} sample difference (${percentage.toFixed(1)}%)`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const compare = document.createElement("a");
    compare.className = "card-btn compare-btn";
    compare.href = `compare.html?bike=${bike.id}`;
    compare.textContent = "COMPARE PRICE";

    const official = document.createElement("a");
    official.className = "card-btn official-btn";
    official.href = bike.officialUrl;
    official.target = "_blank";
    official.rel = "noopener noreferrer";
    official.textContent = "OFFICIAL WEBSITE ↗";

    actions.append(compare, official);
    info.append(brand, name, details, priceRow, savings, actions);
    card.append(imageWrap, info);

    return card;
}

// Display motorcycle cards in the chosen container.
function displayMotorcycles(list, container) {
    if (!container) return;

    container.replaceChildren();

    list.forEach(function (bike) {
        container.appendChild(createMotorcycleCard(bike));
    });
}

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}

// Footer year.
document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});

// Home page featured cards.
const featuredGrid = document.getElementById("featuredGrid");

if (featuredGrid) {
    displayMotorcycles(motorcycles.slice(0, 3), featuredGrid);
}

// Motorcycle listing page.
const productGrid = document.getElementById("productGrid");

if (productGrid) {
    const searchInput = document.getElementById("searchInput");
    const brandFilter = document.getElementById("brandFilter");
    const sortFilter = document.getElementById("sortFilter");
    const resultCount = document.getElementById("resultCount");
    const emptyMessage = document.getElementById("emptyMessage");

    function filterMotorcycles() {
        const term = searchInput.value.trim().toLowerCase();
        const selectedBrand = brandFilter.value;
        const sortBy = sortFilter.value;

        let results = motorcycles.filter(function (bike) {
            const matchesSearch =
                bike.name.toLowerCase().includes(term) ||
                bike.brand.toLowerCase().includes(term) ||
                String(bike.year).includes(term);

            const matchesBrand =
                selectedBrand === "all" ||
                bike.brand === selectedBrand;

            return matchesSearch && matchesBrand;
        });

        if (sortBy === "low") {
            results.sort((a, b) => a.price - b.price);
        } else if (sortBy === "high") {
            results.sort((a, b) => b.price - a.price);
        } else if (sortBy === "savings") {
            results.sort(
                (a, b) =>
                    (b.originalPrice - b.price) -
                    (a.originalPrice - a.price)
            );
        }

        displayMotorcycles(results, productGrid);

        resultCount.textContent =
            `${results.length} motorcycle${results.length === 1 ? "" : "s"} found`;

        emptyMessage.hidden = results.length > 0;
    }

    searchInput.addEventListener("input", filterMotorcycles);
    brandFilter.addEventListener("change", filterMotorcycles);
    sortFilter.addEventListener("change", filterMotorcycles);

    filterMotorcycles();
}

// Price comparison page, if the comparison elements exist.
const compareSelect = document.getElementById("compareSelect");

if (compareSelect) {
    motorcycles.forEach(function (bike) {
        const option = document.createElement("option");
        option.value = String(bike.id);
        option.textContent = `${bike.brand} - ${bike.name}`;
        compareSelect.appendChild(option);
    });

    function updateComparison(bike) {
        if (!bike) return;

        const difference = bike.originalPrice - bike.price;
        const percentage = difference / bike.originalPrice * 100;

        document.getElementById("compareName").textContent = bike.name;
        const compareImage = document.getElementById("compareImage");
        compareImage.src = bike.image;
        compareImage.alt = bike.name;
        document.getElementById("originalPrice").textContent =
            formatPrice(bike.originalPrice);
        document.getElementById("discountPrice").textContent =
            formatPrice(bike.price);
        document.getElementById("savingsAmount").textContent =
            formatPrice(difference);
        document.getElementById("savingsPercent").textContent =
            `${percentage.toFixed(1)}% below sample reference price`;
    }

    const params = new URLSearchParams(window.location.search);
    const bikeId = params.get("bike");

    if (bikeId && motorcycles.some(bike => String(bike.id) === bikeId)) {
        compareSelect.value = bikeId;
    }

    compareSelect.addEventListener("change", function () {
        const bike = motorcycles.find(
            item => String(item.id) === compareSelect.value
        );
        updateComparison(bike);
    });

    updateComparison(
        motorcycles.find(bike => String(bike.id) === compareSelect.value)
        || motorcycles[0]
    );
}

console.log("MotoDeals JavaScript loaded.");
console.log("Motorcycle grid found:", Boolean(productGrid));
