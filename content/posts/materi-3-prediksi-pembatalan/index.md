---
title: "Analisis Data: Prediksi Pembatalan Pemesanan Hotel dengan Algoritma XGBoost"
date: 2026-03-02
author: "Mohammad Rizky Luthfiah Aziz"
categories: ["Materi Kuliah"]
tags: ["Machine Learning", "Python", "Analisis Data"]
thumbnail: "posts/materi-3-prediksi-pembatalan/churn-cancellation.jpg"
---



Dalam industri perhotelan (*hospitality*), pembatalan pemesanan (*booking cancellation*) secara mendadak dapat menyebabkan kerugian finansial yang signifikan. Bisakah kita memprediksi tamu mana yang kemungkinan besar akan membatalkan pesanannya?
<!--more-->
### Membangun Model Prediksi
Pada materi analisis data tingkat lanjut ini, kita akan menggunakan *dataset* publik yang berisi riwayat pemesanan hotel. Kita tidak akan menggunakan algoritma regresi linier biasa, melainkan **XGBoost** (Extreme Gradient Boosting)—salah satu algoritma *machine learning* paling tangguh untuk data tabular.

Tahapan yang dibahas meliputi:
* **Exploratory Data Analysis (EDA):** Melihat korelasi antara waktu tunggu (*lead time*), tipe kamar, dan status pembatalan.
* **Feature Engineering:** Mengubah data tanggal masuk menjadi variabel musim (musim liburan vs hari biasa).
* **Model Training:** Melatih algoritma XGBoost menggunakan bahasa pemrograman Python.

### Source Code dan Modul
Bagi mahasiswa yang ingin menjalankan kode Python ini secara lokal di laptop masing-masing atau menggunakan Google Colab, silakan unduh modul lengkap dan *dataset*-nya di bawah ini:

Berikut adalah materi presentasi yang kita bahas di kelas hari ini:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vShsLuCOsyO0NMBdpZO0bBF9EX14Ll52Fm_P3QfsJnxh2kko_FCASsP8lg4zUnyJw/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Silakan pelajari slide di atas untuk persiapan kuis minggu depan.