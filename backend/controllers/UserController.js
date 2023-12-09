// Mengimpor model User dari file UserModel.js
import User from "../model/UserModel.js";

// Fungsi untuk mengambil semua data pengguna dari database
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();

    // Mengirim respons dengan status 200 dan data pengguna yang berhasil ditemukan
    res.status(200).json(response);
  } catch (error) {
    // Menangkap kesalahan jika terjadi dan mencetak pesan kesalahan pada konsol
    console.log(error.message);
  }
};

// Fungsi untuk mendapatkan data pengguna berdasarkan ID
export const getUserById = async (req, res) => {
  try {
    // Menggunakan model User untuk mencari satu data pengguna berdasarkan ID yang diberikan dalam permintaan (request)
    const response = await User.findOne({
      where: {
        id: req.params.id, // Menggunakan nilai ID dari parameter permintaan (request)
      },
    });

    // Mengirim respons dengan status 200 dan data pengguna yang berhasil ditemukan berdasarkan ID
    res.status(200).json(response);
  } catch (error) {
    // Menangkap kesalahan jika terjadi dan mencetak pesan kesalahan pada konsol
    console.log(error.message);
  }
};


// Fungsi untuk membuat pengguna baru
export const createUser = async (req, res) => {
  try {
    // Membuat pengguna baru menggunakan data yang diterima dari permintaan (request) body
    await User.create(req.body);
    
    // Mengirim respons dengan status 201 (Created) dan pesan bahwa pengguna telah berhasil dibuat
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    // Menangkap kesalahan jika terjadi dan mencetak pesan kesalahan pada konsol
    console.log(error.message);
  }
};

// Fungsi untuk memperbarui informasi pengguna berdasarkan ID
export const updateUser = async (req, res) => {
  try {
    // Memperbarui informasi pengguna berdasarkan ID yang diberikan dalam permintaan (request) body
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    // Mengirim respons dengan status 200 (OK) dan pesan bahwa pengguna telah berhasil diperbarui
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    // Menangkap kesalahan jika terjadi dan mencetak pesan kesalahan pada konsol
    console.log(error.message);
  }
};

// Fungsi untuk menghapus pengguna berdasarkan ID
export const deleteUser = async (req, res) => {
  try {
    // Menghapus pengguna berdasarkan ID yang diberikan dalam parameter permintaan (request)
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    // Mengirim respons dengan status 200 (OK) dan pesan bahwa pengguna telah berhasil dihapus
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    // Menangkap kesalahan jika terjadi dan mencetak pesan kesalahan pada konsol
    console.log(error.message);
  }
};

