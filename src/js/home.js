// const tl = new TimelineMax();

// tl.fromTo(
//     container,
//     1,
//     { maxWidth: "100%" },
//     { maxWidth: "1200px", ease: Power2.easeInOut }
// );

// gasp.from(".home__hero", )
var tl = gsap.timeline();

if (window.innerWidth > 576 && window.pageYOffset == 0) {
    tl.from(".home__container", {
        maxWidth: "100%",
        duration: 0.8,
        ease: Power2.easeInOut
    })
        .to(".home__container", {
            paddingTop: "2.4rem",
            paddingBottom: "3.75rem",
            duration: 0.5,
            ease: Power2.easeInOut
        })

        .fromTo(
            ".home__bg",
            { width: "0%" },
            {
                width: "100%",
                duration: 0.9,
                ease: Power2.easeInOut
            },
            "-=.2"
        )
        .to(
            ".home__hero",
            {
                boxShadow: "0 1px 3px rgba(0,0,0, 0.16)",
                duration: 0.9,
                ease: Power2.easeInOut
            },
            "-=1.1"
        )
        .to(
            ".home__hero-content",
            {
                opacity: "1",
                duration: 0.8,
                ease: Power2.easeInOut
            },
            "-=1.1"
        );
} else {
    tl.from(".home__container", {
        maxWidth: "100%",
        duration: 0,
        ease: Power2.easeInOut
    })
        .to(".home__container", {
            paddingTop: "1.2rem",
            paddingBottom: "3.75rem",
            duration: 0,
            ease: Power2.easeInOut
        })

        .fromTo(
            ".home__bg",
            { width: "0%" },
            {
                width: "100%",
                duration: 0,
                ease: Power2.easeInOut
            }
        )
        .to(".home__hero", {
            boxShadow: "0 1px 3px rgba(0,0,0, 0.16)",
            duration: 0,
            ease: Power2.easeInOut
        })
        .to(".home__hero-content", {
            opacity: "1",
            duration: 0,
            ease: Power2.easeInOut
        });
}
