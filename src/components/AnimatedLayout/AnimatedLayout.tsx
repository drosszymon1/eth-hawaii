"use client";

import Navigation from "../Navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ApplyCircleCursor } from "../ApplyCircleCursor/ApplyCircleCursor";
import Link from "next/link";

interface AnimatedLayoutProps {
    children: React.ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
    useGSAP(
        () => {

            // DECLARATIONS
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            let mm = gsap.matchMedia();
            const stopFrameScroll = 500;

            // CREATE ELEMENTS
            const pinSpacer = document.createElement("div");
            pinSpacer.classList.add("pin-footer");
            const applySpacer = document.createElement("div");
            applySpacer.classList.add("apply-spacer");
            const spacer3 = document.createElement("div");
            spacer3.classList.add("spacer3");
            spacer3.style.zIndex = "-1";
            const spacer4 = document.createElement("div");
            spacer4.classList.add("spacer4");
            spacer4.style.zIndex = "-1";

            // ELEMENTS
            const cursor = document.querySelector(".cursor") as HTMLElement;
            const sponsors = document.querySelector(".sponsors") as HTMLElement;
            const ball = document.querySelector(".ball") as HTMLElement;
            const palms = ["first-bg-palm", "second-bg-palm", "third-bg-palm", "fourth-bg-palm"];
            const modalBg = document.querySelector(".modal-bg") as HTMLElement;
            const callToActionTicketEl = document.getElementById("call-to-action-ticket") as HTMLElement;
            const firstSectionBackground = document.querySelector(".first-section-background") as HTMLElement;
            const navigation = document.querySelector(".navigation") as HTMLElement;
            const bannerContent = document.querySelector(".pin-banner") as HTMLElement;
            const sponsorsSection = document.getElementById("sponsors") as HTMLElement;
            const applySection = document.querySelector(".apply") as HTMLElement;
            const footerSection = document.getElementById("footer") as HTMLElement;
            const stopSpacer = document.getElementById("spacer") as HTMLElement;
        

            mm.add("(max-width: 767px)", () => {

                // MOBILE SMOOTHER
                ScrollSmoother.create({
                    smooth: 1,
                    speed: 1,
                    wrapper: "#customW",
                    content: "#customC",
                    smoothTouch: true,
                    normalizeScroll: true,
                });

                // MOBILE SETTERS
                gsap.set("#mobile-circle", { css: {position: "absolute"}})
                gsap.set(spacer3, { css: {zIndex: -1}})

                // MOBILE ANIMATIONS
                gsap.fromTo("#mobile-circle", {
                    top: "70dvh",
                    x: 60,
                    scale: 1.1,
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, {
                    top: "5dvh",
                    x: 110,
                    opacity: 1,
                    scale: 0.4,
                    scrollTrigger: {
                        trigger: ".sponsors",
                        start: "bottom center",
                        end: "+=1500px",
                        scrub: true,
                    },
                });

                // MOBILE SCROLL TRIGGERS
                const pinBannerTrigger = ScrollTrigger.create({
                    trigger: firstSectionBackground,
                    pin: true,
                    start: "bottom bottom",
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=1200",
                });

                const navTrigger = ScrollTrigger.create({
                    trigger: ".navigation",
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1200",
                });

                const bannerContentTrigger = ScrollTrigger.create({
                    trigger: ".pin-banner",
                    pinSpacing: true,
                    start: "bottom+=20px bottom",
                    pin: true,
                    scrub: 1,
                    end: `+=1200`,
                });
                
                const applyTrigger = ScrollTrigger.create({
                    trigger: "#apply",
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1800",
                    pinSpacer: applySpacer,
                });

                const footerTrigger = ScrollTrigger.create({
                    trigger: "#footer",
                    start: "top+=25 bottom",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1100",
                });

                const spacer3Trigger = ScrollTrigger.create({
                    trigger: "#spacer3",
                    start: 0,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=1100",
                    pinSpacer: spacer3,
                });
            });

            mm.add("(min-width: 768px)", () => {

                // DESKTOP SMOOTHER
                ScrollSmoother.create({
                    smooth: 3,
                    speed: 0.7,
                    wrapper: "#customW",
                    content: "#customC",
                    normalizeScroll: true,
                    effects: true,
                });

                // FIRST SECTION TIMELINE

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: firstSectionBackground,
                        start: "top top",
                        end: () => `+=${firstSectionBackground.offsetHeight / 2}`,
                        scrub: true,
                    }
                });
                
                tl.to("#sun", { x: 0, y: 360 })
                  .to("#sun-large", { x: 0, y: 510 }, "<")
                  .to("#sun-big", { x: 0, y: 450 }, "<")
                  .to("#bird1", { x: 120, y: 260, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird2", { x: 70, y: 170, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird3", { x: 20, y: 340, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird4", { x: -50, y: 330, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird5", { x: -20, y: 390, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird6", { x: -90, y: 410, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird7", { x: -130, y: 440, scale: 0.2, opacity: 0 }, "<")
                  .to("#bird8", { x: -140, y: 414, scale: 0.2, opacity: 0 }, "<");

                // PALM ANIMATION

                const palmAnimation = gsap.timeline({
                    paused: true,
                    defaults: {
                        duration: 1,
                        ease: "power1.inOut",
                    },
                });

                palms.forEach(palm => {
                    palmAnimation.fromTo(`#${palm}`, {
                        x: 0,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                    }, {
                        x: palm.startsWith("first") || palm.startsWith("second") ? 80 : -50,
                        y: palm.startsWith("first") ? -200 : palm.startsWith("second") ? -80 : 0,
                        scale: 1.3,
                        rotate: palm.startsWith("first") || palm.startsWith("second") ? 14 : -24,
                    }, 0)
                });

                //CURSOR MOVEMENT AND LOGIC

                const xTo = gsap.quickTo(cursor, "x", { duration: 0.9, ease: "power3" });
                const yTo = gsap.quickTo(cursor, "y", { duration: 0.9, ease: "power3" });

                let currPageY = 0;

                gsap.set(cursor, { translateX: -200, translateY: -200 });
                gsap.set(cursor, { scale: 0, opacity: 0 });
                gsap.set(ball, { css: { display: "flex" } });
                gsap.set(applySpacer, { css: { cursor: "none" } });

                callToActionTicketEl?.addEventListener("click", () => {
                    gsap.set(cursor, { scale: 0, opacity: 0 });
                });

                applySection?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });

                modalBg?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });

                document.addEventListener("mouseenter", () => {
                     const modal = document.getElementById("modal");
                     if (modal) {
                        gsap.set(cursor, { scale: 0, opacity: 0 });
                     }
                });

                pinSpacer?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });

                applySpacer?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });

                footerSection?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });

                sponsors?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });

                spacer3?.addEventListener("mouseenter", () => {
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });

                document.addEventListener("mousemove", (e) => {
                    xTo((e.pageX - 20) - 100);
                    yTo((e.pageY - 20) - 100);
                    currPageY = (e.pageY - 20) - 100;
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                });

                document.addEventListener("wheel", (e) => {
                    const { deltaY } = e;
                    yTo(deltaY > 0 ? currPageY + deltaY + 100 : currPageY - (- deltaY) - 100);
                });

                //DESKTOP SCROLL TRIGGERS

                const pinBannerTrigger = ScrollTrigger.create({
                    trigger: firstSectionBackground,
                    pin: true,
                    start: "bottom bottom",
                    pinSpacing: false,
                    scrub: 1,
                    end: () => `+=${firstSectionBackground.offsetHeight}`,
                });

                const navTrigger = ScrollTrigger.create({
                    trigger: navigation,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: () => `+=${firstSectionBackground.offsetHeight + 500}`,
                });

                const bannerContentTrigger = ScrollTrigger.create({
                    trigger: bannerContent,
                    pinSpacing: false,
                    start: () =>  `bottom+=${bannerContent.offsetHeight / 20} bottom`,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${firstSectionBackground.offsetHeight + bannerContent.offsetHeight}`,
                });

                const sponsorsTrigger = ScrollTrigger.create({
                    trigger: sponsorsSection,
                    start: "center center",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: () => `+=${sponsorsSection.offsetHeight / 2}`,
                    animation: palmAnimation,
                    onEnter: () => {
                        palmAnimation.play();
                    },
                    onLeaveBack: () => {
                        palmAnimation.pause();
                    },
                });

                const applyTrigger = ScrollTrigger.create({
                    trigger: applySection,
                    start: "center-=50 center",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: () => `+=${applySection.offsetHeight + footerSection.offsetHeight + ( applySection.offsetHeight / 2)}`,
                    pinSpacer: applySpacer,
                });

                const spacer3Trigger = ScrollTrigger.create({
                    trigger: "#spacer3",
                    start: 0,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: () => `+=${applySection.offsetHeight + 100}`,
                    pinSpacer: spacer3,
                });

                gsap.set("#footer", { y: -40 });

                const footerTrigger = ScrollTrigger.create({
                    trigger: footerSection,
                    start: "top+=40 bottom",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: () => `+=${spacer3.offsetHeight + 40}`,
                    pinReparent: true,
                    pinSpacer: pinSpacer,
                });
            });
        }
    );


    return (
        <>
            <ApplyCircleCursor />
            <div id="customW">
                <div id="customC">
                    <Navigation />
                    {children}
                </div>
            </div>
        </>
    )
};