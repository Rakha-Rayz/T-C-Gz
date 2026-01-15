// Masalah keluarga
const sidebar = document.getElementById("side_bar");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("navbtn");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});

// Masalah copyright
const copyright_div = document.getElementById("copyright")
const tngl = new Date();
const tahun = tngl.getFullYear();

const teks = `© ${tahun} www.rakha-rayz.github.io/T-C-Gz - All Right Reserved.`;
copyright_div.textContent = teks;
