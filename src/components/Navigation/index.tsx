"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "@/assets/logo.svg";
import "./style.css";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import SoundOn from "../icons/sound-on";


export const Navigation = () => {
  const [isOn, setIsOn] = useState(false);

  const handleOpenModal = () => {
    const applySection = document.getElementById("ticket-button");
    applySection?.click();
}
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (isOn) {
        audio.volume = 0.25;
        audio.play();
      } else {
        audio.volume = 0;
        audio.pause();
      }
    }
  }, [isOn, audioRef]);

  return (
    <nav className="container mx-auto navigation">
      <div className="logo-container">
        <figure>
          <Image src={Logo} alt="Logo" width={21.6} height={48} />
        </figure>
        <span className="divider"></span>
        <div className="logo-details">
          <p className="title">OAHU, HAWAII</p>
          <p className="subtitle">Q4 2024</p>
        </div>
      </div>
      <audio ref={audioRef} id="myAudio" className="hidden" autoPlay loop>
        <source src="/hawaii.mp3" type="audio/mpeg" />
      </audio>
      <iframe src="/hawaii.mp3" style={{display: "none"}} allow="autoplay" id="audio" />
      <div className="button-group">
        <PrimaryButton id="audio-button" className="footer-circle-button" variant="secondary" onlyIcon onClick={() => setIsOn(!isOn)}>
          <SoundOn isOn={isOn} />
        </PrimaryButton>
        <PrimaryButton className="ticket-btn" onClick={handleOpenModal}>Get tickets</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navigation;
