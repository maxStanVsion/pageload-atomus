function pageLoad() {
  const container = document.querySelector(".js-page-load");
  const svg = document.querySelector(".svg-brand");
  const brandElements = svg.querySelector(".brand-elements");
  const brandName = svg.querySelector(".brand-name");
  const tl = gsap.timeline({
    defaults: {
      duration: 1.3,
    },
  });

  tl.to(brandElements, {
    delay: 0.5,
    autoAlpha: 1,
    y: 0,
  })
    .to(brandElements.children, {
      duration: 0.5,
      x: 0,
      y: 0,
    })
    .to(
      brandName,
      {
        autoAlpha: 1,
      },
      "<0"
    )
    .fromTo(
      ".brand-blob",
      {
        x: 60, 
        y: 30,
        scale: 1.3,
      },
      {
        duration: 1.5,
        x: 0,
        y: 0,
        scale: 0,
        ease: "expo.out",
        transformOrigin: "top",
      },
      ">25%"
    ).to(container, {duration: 0.4, opacity: 0}, "<15%")
}

pageLoad();
