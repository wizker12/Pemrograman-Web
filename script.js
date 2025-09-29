// === DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
  // === Dark Mode Toggle ===
  const darkModeBtn = document.createElement("button");
  darkModeBtn.textContent = "🌙 Dark Mode";
  darkModeBtn.classList.add("btn", "btn-primary");
  document.querySelector("header").appendChild(darkModeBtn);

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  // === Highlight Nav ketika klik ===
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // === Toggle daftar mobil ketika klik kategori ===
  const carCards = document.querySelectorAll("#mobil .card");
  carCards.forEach(card => {
    const title = card.querySelector("h3");
    title.addEventListener("click", () => {
      card.classList.toggle("open");
      card.classList.toggle("highlight"); // highlight saat terbuka
    });
  });

  // === Section "Mobil Favorit Saya" ===
  const favSection = document.createElement("section");
  favSection.id = "favorit";
  favSection.innerHTML = "<h2>Mobil Favorit Saya</h2><div id='fav-list' class='fav-grid'></div>";
  document.querySelector("#kontak").before(favSection);

  // Tambah tombol "Favorit" ke setiap list mobil
  const carItems = document.querySelectorAll(".car-list li");
  carItems.forEach(item => {
    const favBtn = document.createElement("button");
    favBtn.textContent = "❤️";
    favBtn.style.marginLeft = "8px";
    favBtn.style.cursor = "pointer";
    favBtn.title = "Tambah ke Favorit";
    item.appendChild(favBtn);

    favBtn.addEventListener("click", () => {
      const favList = document.querySelector("#fav-list");
      const clone = item.cloneNode(true);
      clone.querySelector("button")?.remove(); // hapus tombol favorit di clone
      favList.appendChild(clone);
    });
  });

  // === Tampilkan Data Mobil Dummy (tanpa JSON) ===
  const fetchBtn = document.createElement("button");
  fetchBtn.textContent = "Tampilkan Data Mobil Dummy";
  fetchBtn.classList.add("btn", "btn-primary");
  document.querySelector("#kontak").before(fetchBtn);

  fetchBtn.addEventListener("click", () => {
    // Data dummy langsung di JS
    const dummyMobil = [
      { nama: "Toyota Supra", tipe: "Sport", deskripsi: "Sport car legendaris dengan performa tinggi." },
      { nama: "Honda HR-V", tipe: "SUV", deskripsi: "SUV compact irit dan modern, cocok untuk keluarga." },
      { nama: "Mitsubishi Triton", tipe: "Pickup", deskripsi: "Pickup tangguh untuk aktivitas angkut barang." },
      { nama: "Suzuki Jimny", tipe: "Off-road", deskripsi: "Mobil 4x4 kecil, populer untuk petualangan off-road." },
      { nama: "Daihatsu Ayla", tipe: "City Car", deskripsi: "Mobil mungil irit, cocok untuk aktivitas harian di kota." }
    ];

    const container = document.createElement("div");
    container.style.marginTop = "2rem";
    container.classList.add("dummy-grid");

    dummyMobil.forEach(mobil => {
      const article = document.createElement("article");
      article.classList.add("card");
      article.innerHTML = `
        <h3>${mobil.nama} <small>(${mobil.tipe})</small></h3>
        <p>${mobil.deskripsi}</p>
      `;
      container.appendChild(article);
    });

    document.querySelector("#kontak").appendChild(container);
  });
});
