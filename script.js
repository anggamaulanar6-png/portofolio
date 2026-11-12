
// Mengambil elemen tombol menu
const angga_menu_toggle = document.getElementById("angga_menu_toggle");

// Mengambil daftar menu
const angga_menu = document.getElementById("angga_menu");

// Membuka dan menutup menu mobile
angga_menu_toggle.addEventListener("click", function () {

    angga_menu.classList.toggle("angga_show");

    const angga_is_open = angga_menu.classList.contains("angga_show");

    angga_menu_toggle.innerHTML = angga_is_open
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    angga_menu_toggle.setAttribute("aria-expanded", angga_is_open);

});

// Menutup menu setelah link diklik
const angga_menu_links = document.querySelectorAll(".angga_menu a");

angga_menu_links.forEach(function (link) {

    link.addEventListener("click", function () {
        angga_menu.classList.remove("angga_show");

        angga_menu_toggle.innerHTML = '<i class="fas fa-bars"></i>';
        angga_menu_toggle.setAttribute("aria-expanded", "false");
    });

});

// Menampilkan tahun secara otomatis
document.getElementById("angga_year").textContent =
    new Date().getFullYear();

// Efek menu aktif berdasarkan section
const angga_sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function () {

    let angga_current = "";

    angga_sections.forEach(function (section) {

        const angga_section_top = section.offsetTop - 120;

        if (window.scrollY >= angga_section_top) {
            angga_current = section.getAttribute("id");
        }

    });

    angga_menu_links.forEach(function (link) {

        link.classList.remove("angga_active");

        if (link.getAttribute("href") === "#" + angga_current) {
            link.classList.add("angga_active");
        }

    });

});
