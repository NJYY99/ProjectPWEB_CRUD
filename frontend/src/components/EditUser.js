import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  // State untuk menyimpan nilai input pengguna
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male"); // Nilai default untuk jenis kelamin
  const navigate = useNavigate(); // Hook useNavigate dari react-router-dom
  const { id } = useParams(); // Mengambil ID pengguna dari URL

  // Mengambil data pengguna dengan ID yang sesuai saat komponen dimuat
  useEffect(() => {
    getUserById();
  }, []);

  // Fungsi untuk memperbarui data pengguna
  const updateUser = async (e) => {
    e.preventDefault(); // Mencegah perilaku default dari form submit
    try {
      // Melakukan permintaan PATCH untuk memperbarui data pengguna dengan ID yang sesuai
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      
      // Navigasi kembali ke halaman utama setelah pengguna diperbarui
      navigate("/");
    } catch (error) {
      // Menangkap dan menampilkan kesalahan jika terjadi kesalahan saat pembaruan data
      console.error("Error updating user:", error);
    }
  };

  // Fungsi untuk mendapatkan data pengguna berdasarkan ID
  const getUserById = async () => {
    try {
      // Melakukan permintaan GET ke server untuk mendapatkan data pengguna dengan ID yang sesuai
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      
      // Mengatur state dengan data pengguna yang diterima dari server
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
    } catch (error) {
      // Menangkap dan menampilkan kesalahan jika terjadi kesalahan saat pengambilan data
      console.error("Error fetching user:", error);
    }
  };

  // Render form untuk mengubah data pengguna
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          {/* Input untuk nama pengguna */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          {/* Input untuk email pengguna */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          {/* Pilihan untuk jenis kelamin pengguna */}
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>
              </div>
            </div>
          </div>
          {/* Tombol untuk memperbarui data pengguna */}
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
