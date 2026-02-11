const yearEl = document.getElementById("y");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModalBtn");

function openModal(src, altText) {
  if (!modal || !modalImg) return;
  modalImg.src = src;
  modalImg.alt = altText || "Expanded screenshot";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (modalImg) modalImg.src = "";
}

document.addEventListener("click", (e) => {
  const img = e.target.closest("img.zoomable");
  if (img) openModal(img.src, img.alt);
});

if (closeBtn) closeBtn.addEventListener("click", closeModal);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
