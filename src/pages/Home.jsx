import "../assets/Home.css"
import foto1 from "../assets/foto1.jpeg"

function Home() {
    return ( 
    <>
        <section className="h-screen w-full  banner text-black flex items-center justify-center flex-col">
            <h1 className="nama drop-shadow-xl text-8xl text-white">Raisa & Erwin</h1>
            <h1 className="text drop-shadow-xl text-white text-2xl">Rabu, 18 Mei 2022</h1>
            <a href="#isi" className="p-3 mt-5 bg-green-400 rounded-md text-white font-bold">Lihat Undangan</a>
        </section>
        <section id="isi" className="w-full h-screen text-black text-center p-5" style={{backgroundImage: `url(https://cdn-otwhalal.jetsimg.com/media/2020/07/Background-Undangan-Pernikahan-Klasik-1.jpg)`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}>
            <h1 className="text-5xl pb-3 text">We're Getting Married</h1>
            <p className="text">Dengan memohon rahmat dan ridho Allah SWT. yang telah menciptakan mahluk-Nya berpasang pasangan, kami bermaksud menyelenggarakan pernikahan putra -putri kami.</p>
            <div>
                <h1 className="nama text-3xl text-red-600">Erwin Gautama Putra, S.T </h1>
                <p className="text-left">( Erwin )</p>
            </div>
            <p className="text mb-4">Dengan</p>
            <div>
                <h1 className="nama text-3xl text-red-600">Nur Azizah, A.Md. RMIK </h1>
                <p className="text-right">( Raisa )</p>
            </div>
            {/* <p className="text">Dengan memohon rahmat dan ridho Allah SWT. yang telah menciptakan mahluk-Nya berpasang pasangan, kami bermaksud menyelenggarakan pernikahan putra -putri kami.</p> */}
            <img className="p-4 -rotate-3 rounded-md shadow-md bg-white mt-3 " src={foto1} alt="" />
        </section>

    </> 
    );
}

export default Home;