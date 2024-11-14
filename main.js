const closeIcon = document.getElementById("close-icon");
const openIcon = document.getElementById("open-icon");
const menu = document.querySelector(".menu");
const nextBtn = document.querySelector(".arrow-btn-next");
const prevBtn = document.querySelector(".arrow-btn-prev");
const headerTitle = document.querySelector(".header-title");
const headerText = document.querySelector(".header-text");
const overlay = document.querySelector(".overlay");

let headerIndex = 0;

const headerContent = [
	{
		title: "Discover innovative ways to decorate",
		text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
	},
	{
		title: "We are available all across the globe",
		text: "With stores all over the world, it's easy for you to find furniture for your home or place of business Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
	},
	{
		title: "Manufactured with the best materials",
		text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand the customers want for their home and office."
	}
];

openIcon.addEventListener("click", (event) => {
	menu.classList.add("open");
	overlay.style.display = "block";
});

closeIcon.addEventListener("click", (event) => {
	console.log("close");
	menu.classList.remove("open");
	overlay.style.display = "none";
});

nextBtn.addEventListener("click", () => {
	headerIndex++;
	if (headerIndex === 3) headerIndex = 0;
	headerTitle.textContent = headerContent[headerIndex].title;
	headerText.textContent = headerContent[headerIndex].text;
});

prevBtn.addEventListener("click", () => {
	if (headerIndex === 0) headerIndex = 3;
	headerIndex--;
	headerTitle.textContent = headerContent[headerIndex].title;
	headerText.textContent = headerContent[headerIndex].text;
});

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".arrow-btn-next",
		prevEl: ".arrow-btn-prev"
	}
});
