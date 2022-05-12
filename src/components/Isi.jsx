import foto1 from "../assets/foto1.jpeg";
function Isi() {
  return (
    <section
      id="isi"
      className="w-full text-black text-center p-5 flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to top, #ffffffa0 0%, #bebebe74 100%), url(https://cdn-otwhalal.jetsimg.com/media/2020/07/Background-Undangan-Pernikahan-Klasik-1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl pb-3 text">We're Getting Married</h1>
      <p className="text font-semibold">
        Assalamualaikum Warahmatullahi Wabarakatuh.
      </p>
      <p className="text ">
        Dengan memohon rahmat dan ridho Allah SWT. yang telah menciptakan
        mahluk-Nya berpasang pasangan, kami bermaksud menyelenggarakan
        pernikahan putra -putri kami.
      </p>
      <div id="gautama" className="">
        <h1 className="nama text-3xl mt-4 text-red-600">
          Erwin Gautama Putra, S.T{" "}
        </h1>
        <p className="text-left text">( Erwin )</p>
      </div>
      <p className="text">Dengan</p>
      <div>
        <h1 className="nama mt-4 text-3xl text-red-600">
          Nur Azizah, A.Md. RMIK{" "}
        </h1>
        <p className="text-right text">( Raisa )</p>
      </div>
      <p className="text mt-3">
        Untuk mengikuti syari'at agama-Mu dan mengikuti sunnah rasul-Mu dalam
        membentuk keluarga sakinah, mawaddah, warahmah. Maka izinkanlah kami
        menikahkan mereka.
      </p>
      <h1 className="text-5xl pb-3 text mt-3">Save The Date</h1>
      {/* <div className="bg-white rounded-md shadow-md p-4 w-full text mb-4">
                <h1 className="text-2xl font-bold">Akad</h1>
                <h1 className="text-xl text-red-600 font-semibold">Selasa, 17 Mei 2022 | 09.15 WITA</h1>
                <h1 className="text-md text-red-600 font-semibold">Masjid Al-Markaz Al-Islami Makassar</h1>
                <iframe className="w-full mt-3" title="akad" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8367533192504!2d119.42416111476398!3d-5.129981796277049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd5a5f2dece3%3A0x7a490939f4f38e49!2sMasjid%20Al-Markaz%20Al-Islami%20Makassar!5e0!3m2!1sid!2sid!4v1652273481755!5m2!1sid!2sid"  height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 w-full text mb-4">
                <h1 className="text-2xl font-bold">Resepsi</h1>
                <h1 className="text-xl text-red-600 font-semibold">Rabu, 18 Mei 2022 | 10.00 WITA</h1>
                <h1 className="text-sm text-red-600 font-semibold">BTP, JL. Kemuliaan Bangkala Blok D No. 58</h1>
                <h1 className="text-sm text-red-600 font-semibold">(Lorong TK Islam Terpadu Al Fikri)</h1>
                <h1 className="text-sm text-red-600 font-semibold">(Penjahit Kiran)</h1>
                <iframe className="w-full" title="resepsi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8015284192406!2d119.50999951434078!3d-5.135635953382417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbc7d33d3b57%3A0x1a31d1516963bcff!2sJalan%20Kemuliaan%20Bangkala%20BTP!5e0!3m2!1sid!2sid!4v1652274397217!5m2!1sid!2sid" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
      <div className="grid grid-cols-2 gap-3 place-items-stretch">
        <div className="bg-white rounded-md shadow-md p-4 w-full text mb-4 flex justify-between flex-col h-full">
          <div>
            <h1 className="text-2xl font-bold">Akad</h1>
            <h1 className="text-xl text-red-800 font-semibold">
              Selasa, 17 Mei 2022 | 09.15 WITA
            </h1>
            <h1 className="text-md text-red-800 font-semibold">
              Masjid Al-Markaz Al-Islami Makassar
            </h1>
          </div>
          <button className="p-2 bg-green-200">Buka Maps</button>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 w-full text mb-4 flex justify-between flex-col h-full">
          <div>
            <h1 className="text-2xl font-bold">Resepsi</h1>
            <h1 className="text-xl text-red-800 font-semibold">
              Rabu, 18 Mei 2022 | 10.00 WITA
            </h1>
            <h1 className="text-sm text-red-800 font-semibold">
              BTP, JL. Kemuliaan Bangkala Blok D No. 58
            </h1>
            <h1 className="text-sm text-red-800 font-semibold">
              (Lorong TK Islam Terpadu Al Fikri)
            </h1>
            <h1 className="text-sm text-red-800 font-semibold">
              (Penjahit Kiran)
            </h1>
          </div>
          <button className="p-2 bg-green-200 ">Buka Maps</button>
        </div>
      </div>
      <p className="text mt-3 font-semibold ">
        Kami memohon do'a dan restu agar proses pernikahan kami berjalan lancar
        dan dirahmati oleh Allah SWT..
      </p>
      <img
        className="p-4 -rotate-3 rounded-md shadow-md bg-white mt-8 "
        src={foto1}
        alt=""
      />
      <h1 className="text-5xl pb-3 text mt-3">Amplop Digital</h1>
      <p className="text font-semibold mb-3">
        Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika
        memberi adalah unkapan tanda terimakasih anda, anda dapat memberi kado
        secara cashless
      </p>
      <div className="card rounded-md shadow-md p-4 w-full text mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
          width="100"
          alt=""
        />
        <hr className="font-bold text-xl text-black mt-3 mb-3" />
        <p className="tracking-widest">0251922020</p>
        <p className="tracking-widest">A.N. Erwin Gautama P.</p>
      </div>
    </section>
  );
}

export default Isi;
