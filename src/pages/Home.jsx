import "../assets/Home.css";
import "animate.css";
import music from "../assets/music.mp3";
import Banner from "../components/Banner";
import Isi from "../components/Isi";
import { useState } from "react";

function Home() {
  const [pop, setPop] = useState("right");
  const playSound = () => {
    let audio = new Audio(music);
    setPop("left");
    audio.play();
  };
  return (
    <>
      <Banner className={pop} btnClick={playSound} /> <Isi />
    </>
  );
}

export default Home;
