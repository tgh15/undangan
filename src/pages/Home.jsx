import "../assets/Home.css"

function Home() {
    return ( 
    <>
        <section className="h-screen w-full banner text-black flex items-center justify-center flex-col">
            <h1 className="nama drop-shadow-xl">Raisa & Erwin</h1>
            <h1 className="text drop-shadow-xl text-white">Rabu, 18 Mei 2022</h1>
            <hr />
        </section>
        <section className="h-screen w-full  text-black text-center">
            <h1 className=" text">We're Getting Married</h1>
            <hr />
        </section>

    </> 
    );
}

export default Home;