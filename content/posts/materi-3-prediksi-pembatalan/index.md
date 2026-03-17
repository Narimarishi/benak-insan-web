---
title: 'Analisis Data: Prediksi Pembatalan Pemesanan Hotel dengan Algoritma XGBoost'
date: 2026-03-02
categories:
  - Materi Kuliah
tags:
  - Machine Learning
  - Python
  - Analisis Data
thumbnail: churn-cancellation.jpg
author: Mohammad Rizky Luthfiah Aziz
---

Dalam industri perhotelan (_hospitality_), pembatalan pemesanan (_booking cancellation_) secara mendadak dapat menyebabkan kerugian finansial yang signifikan. Bisakah kita memprediksi tamu mana yang kemungkinan besar akan membatalkan pesanannya?
<!--more-->

### Membangun Model Prediksi

Pada materi analisis data tingkat lanjut ini, kita akan menggunakan _dataset_ publik yang berisi riwayat pemesanan hotel. Kita tidak akan menggunakan algoritma regresi linier biasa, melainkan **XGBoost** (Extreme Gradient Boosting)—salah satu algoritma _machine learning_ paling tangguh untuk data tabular.

Tahapan yang dibahas meliputi:

* **Exploratory Data Analysis (EDA):** Melihat korelasi antara waktu tunggu (_lead time_), tipe kamar, dan status pembatalan.
* **Feature Engineering:** Mengubah data tanggal masuk menjadi variabel musim (musim liburan vs hari biasa).
* **Model Training:** Melatih algoritma XGBoost menggunakan bahasa pemrograman Python.

### Source Code dan Modul

Bagi mahasiswa yang ingin menjalankan kode Python ini secara lokal di laptop masing-masing atau menggunakan Google Colab, silakan unduh modul lengkap dan _dataset_-nya di bawah ini:

Berikut adalah materi presentasi yang kita bahas di kelas hari ini:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vShsLuCOsyO0NMBdpZO0bBF9EX14Ll52Fm_P3QfsJnxh2kko_FCASsP8lg4zUnyJw/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Silakan pelajari slide di atas untuk persiapan kuis minggu depan.
