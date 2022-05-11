import { useEffect, useState } from "react";
import { db } from "../firebase";
import { child, onValue, push, ref, set } from "firebase/database";

function Tamu() {
  const [tamu, setTamu] = useState({
    nama: "",
    alamat: "",
    wa: "",
  });
  const handleSubmit = async () => {
    const key = push(child(ref(db), "tamu")).key;
    console.log(tamu);
    try {
      await set(ref(db, "tamu/" + key), {
        ...tamu,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setTamu({ ...tamu, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    async function fetchData() {
      const data = ref(db, "tamu");
      onValue(data, (snapshoot) => {
        console.log(snapshoot.toJSON());
      });
    }
    fetchData();
  }, []);
  return (
    <div className="p-3">
      <div className="w-full ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama Tamu
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              name="nama"
              type="text"
              placeholder="Nama Tamu"
              value={tamu.nama}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamat"
              name="alamat"
              type="text"
              placeholder="Alamat"
              value={tamu.alamat}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="wa"
            >
              No WA
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="wa"
              name="wa"
              type="text"
              placeholder="No WA"
              onChange={(e) => handleChange(e)}
              value={tamu.wa}
            />
          </div>

          <button
            onClick={() => handleSubmit()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
            type="button"
          >
            Tambah Tamu
          </button>
        </form>
      </div>
      <div className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default Tamu;
