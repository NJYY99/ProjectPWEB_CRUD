// Mengimpor modul express untuk membuat aplikasi web
import express from "express";

// Mengimpor modul cors untuk menangani akses lintas domain pada aplikasi
import cors from "cors";

// Mengimpor rute-rute terkait pengguna dari file UserRoute.js
import UserRoute from "./routes/UserRoute.js";

// Membuat instance aplikasi Express
const app = express();

// Menggunakan middleware cors untuk mengizinkan akses lintas domain pada aplikasi
app.use(cors());

// Menggunakan middleware express.json() untuk memungkinkan aplikasi membaca body dalam format JSON
app.use(express.json());

// Menggunakan rute-rute yang terkait dengan pengguna yang telah diimpor dari UserRoute.js
app.use(UserRoute);

// Menjalankan server pada port 5000 dan mencetak pesan saat server telah berjalan
app.listen(5000, () => console.log("Server up and running..."));
