gsap.registerPlugin(ScrollTrigger);

//trigger navigation events
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "header",
        start: "top",
        end: () => `+=${document.querySelector("body").offsetHeight}`,
        pin: true,
        pinSpacing: false,
    }
})

tl.to("header", {
    zIndex: 2,
    backgroundColor: "#F6F4F3",
})

//trigger home

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top",
        end: "-50px",
        pin: true,
        scrub: 2,
        pinSpacing: false,
    }
})

tl1.to("#home", {
    transform: "translateX(-150%)",
    ease: "power2.in",
    duration: 2,
})

//trigger about

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMe",
        start: "-650px",
        end: "-640px",
        scrub: 2,
    }
})

tl2.to("#aboutMe", {
    transform: "translateY(-80%)",
    ease: "power2.in",
    duration: 1,
})