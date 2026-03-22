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