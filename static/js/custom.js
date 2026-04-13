document.addEventListener("DOMContentLoaded", function() {
    // 1. Membuat elemen tombol secara otomatis
    const btn = document.createElement("button");
    btn.id = "backToTop";
    btn.title = "Kembali ke Atas";
    // Menggunakan ikon panah atas (SVG) agar estetik dan tajam
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>`;
    document.body.appendChild(btn);

    // 2. Logika memunculkan/menyembunyikan tombol saat di-scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    // 3. Logika saat tombol diklik (Smooth Scroll ke atas)
    btn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// FITUR UX: Tutup menu dropdown mobile jika klik di luar area menu
document.addEventListener('click', function(event) {
    var menuBtn = document.querySelector('.menu__btn');
    var menuList = document.querySelector('.menu__list');

    // Pastikan tombol menu ada di layar (agar tidak error di versi desktop)
    if (!menuBtn || !menuList) return;

    // Mendeteksi apakah titik yang diklik oleh user berada di DALAM area menu/tombol
    var isClickInside = menuBtn.contains(event.target) || menuList.contains(event.target);

    // Jika kliknya di LUAR, DAN menu sedang dalam keadaan terbuka (aria-expanded="true")
    if (!isClickInside && menuBtn.getAttribute('aria-expanded') === 'true') {
        // Simulasikan klik pada tombol untuk menutupnya dengan aman
        menuBtn.click(); 
    }
});