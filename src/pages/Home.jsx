import "../assets/Home.css";
import "animate.css";
import music from "../assets/music.mp3";
import Banner from "../components/Banner";
import Isi from "../components/Isi";

function Home() {
  const playSound = () => {
    let audio = new Audio(music);
    audio.play();
  };
  return (
    <>
      <Banner btnClick={playSound} /> <Isi />
    </>
  );
}

export default Home;
