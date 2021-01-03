const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");

toggleBtn.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
});

// !Bonus
document.addEventListener("click", (e) => {
	if (e.target.classList.value === "") {
		sidebar.classList.remove("show-sidebar");
	}
});
