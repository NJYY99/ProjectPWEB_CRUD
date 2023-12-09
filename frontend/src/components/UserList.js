import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  // State 'users' digunakan untuk menyimpan data pengguna dari server
  const [users, setUsers] = useState([]);

  // Mengambil data pengguna dari server saat komponen dimuat (melalui useEffect dengan array dependencies kosong [])
  useEffect(() => {
    getUsers();
  }, []);

  // Fungsi untuk mengambil data pengguna dari server
  const getUsers = async () => {
    try {
      // Melakukan permintaan GET ke server untuk mendapatkan data pengguna
      const response = await axios.get("http://localhost:5000/users");
      
      // Mengatur state 'users' dengan data yang diterima dari server
      setUsers(response.data);
    } catch (error) {
      // Menangkap dan menampilkan kesalahan jika terjadi kesalahan dalam permintaan
      console.error("Error fetching data:", error);
    }
  };

  // Fungsi untuk menghapus pengguna berdasarkan ID
  const deleteUser = async (id) => {
    try {
      // Melakukan permintaan DELETE ke server untuk menghapus pengguna berdasarkan ID
      await axios.delete(`http://localhost:5000/users/${id}`);
      
      // Memanggil getUsers kembali untuk memperbarui daftar pengguna setelah penghapusan
      getUsers();
    } catch (error) {
      // Menangkap dan menampilkan kesalahan jika terjadi kesalahan dalam penghapusan
      console.error("Error deleting user:", error);
    }
  };

  // Render tampilan untuk daftar pengguna
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {/* Tombol untuk menambah pengguna baru */}
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        {/* Tabel untuk menampilkan daftar pengguna */}
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping untuk menampilkan setiap pengguna dalam tabel */}
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  {/* Tombol Edit yang mengarahkan ke halaman edit pengguna */}
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  {/* Tombol Delete yang memanggil fungsi deleteUser dengan ID pengguna */}
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
