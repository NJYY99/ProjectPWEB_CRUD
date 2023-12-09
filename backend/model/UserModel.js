import { Sequelize } from "sequelize";
import db from "../config/database.js";

// Mengimpor DataTypes dari Sequelize
const { DataTypes } = Sequelize;

// Membuat model User yang terhubung dengan tabel 'users' dalam database
const User = db.define(
  "users",
  {
    // Mendefinisikan struktur kolom-kolom pada tabel 'users'
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    // Mengatur bahwa nama tabel akan sama persis dengan yang didefinisikan di sini
    freezeTableName: true,
  }
);

// Menjalankan sinkronisasi database
// Ini adalah self-invoking asynchronous function (fungsi yang dipanggil secara otomatis)
// yang akan menjalankan sinkronisasi tabel User dengan database saat file ini diimpor
(async () => {
  await db.sync();
})();

// Ekspor model User agar dapat digunakan di tempat lain dalam aplikasi
export default User;
