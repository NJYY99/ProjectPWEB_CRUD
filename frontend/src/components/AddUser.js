import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  // State untuk menyimpan nilai input pengguna
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male"); // Nilai default untuk jenis kelamin
  const navigate = useNavigate(); // Hook useNavigate dari react-router-dom

  // Fungsi untuk menyimpan data pengguna baru
  const saveUser = async (e) => {
    e.preventDefault(); // Mencegah perilaku default dari form submit
    try {
      // Melakukan permintaan POST untuk menyimpan data pengguna baru
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      
      // Navigasi kembali ke halaman utama ("/") setelah pengguna disimpan
      navigate("/");
    } catch (error) {
      // Menangkap dan menampilkan kesalahan jika terjadi kesalahan saat menyimpan
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {/* Form untuk menambahkan pengguna baru */}
        <form onSubmit={saveUser}>
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
          {/* Tombol untuk menyimpan data pengguna */}
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
  