import express from "express";

// Mengimpor fungsi-fungsi dari UserController untuk mengelola operasi CRUD pengguna
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/UserController.js";

// Membuat instance router dari express
const router = express.Router();

// Menetapkan endpoint-endpoint yang berbeda dengan metode HTTP yang sesuai
// ke fungsi-fungsi pengontrol yang akan menangani permintaan tersebut
router.get("/users", getUsers); // Endpoint untuk mendapatkan daftar pengguna
router.get("/users/:id", getUserById); // Endpoint untuk mendapatkan pengguna berdasarkan ID
router.post("/users", createUser); // Endpoint untuk membuat pengguna baru
router.patch("/users/:id", updateUser); // Endpoint untuk memperbarui pengguna berdasarkan ID
router.delete("/users/:id", deleteUser); // Endpoint untuk menghapus pengguna berdasarkan ID

// Mengekspor router agar dapat digunakan di file lain dalam aplikasi
export default router;
