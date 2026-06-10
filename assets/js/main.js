gsap.from(".subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
});

gsap.from("h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
});

gsap.from(".description", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from(".socials li", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    delay: 0.8,
    ease: "power4.out",
});

gsap.to(".shape-1", {
    x: 100,
    y: 50,
    duration: 8,
    repeat: -1,
    yoyo: true,
});

gsap.to(".shape-2", {
    x: -120,
    y: 100,
    duration: 10,
    repeat: -1,
    yoyo: true,
});

gsap.to(".shape-3", {
    x: 100,
    y: -80,
    duration: 12,
    repeat: -1,
    yoyo: true,
});
