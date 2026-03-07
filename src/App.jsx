import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Nav from "./Reused/Nav";
import Center from "./Reused/Center";
import Footer from "./Reused/Footer";

function Home() {
  const containerRef = useRef(null);
  const sec6ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const firstX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-150%"]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const secondX = useTransform(scrollYProgress, [0.4, 0.8], ["150%", "0%"]);
  const secondOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  // sec-6 scroll — smoother, more elegant transforms
  const { scrollYProgress: sec6Progress } = useScroll({
    target: sec6ref,
    offset: ["start end", "end start"],
  });

  // Book rises up and straightens as it enters view
  const bookY = useTransform(sec6Progress, [0, 0.5], ["80px", "0px"]);
  const bookOpacity = useTransform(sec6Progress, [0, 0.35], [0, 1]);
  const bookRotate = useTransform(sec6Progress, [0, 0.55], [-18, 3]);
  const bookScale = useTransform(sec6Progress, [0, 0.55], [0.82, 1]);
  // Subtle shadow depth: book feels like it's lifting off the page
  const bookShadow = useTransform(
    sec6Progress,
    [0, 0.55],
    ["0px 8px 20px rgba(0,0,0,0.12)", "0px 40px 80px rgba(0,0,0,0.30)"],
  );

  return (
    <>
      <div className="main-home">
        <Nav />
        <div className="upper-video-content d-flex justify-content-between align-items-center flex-wrap ">
          <div className="d-flex gap-5 align-items-center justify-content-between ">
            <p className="p-0 m-0 ">Residential Complex in Estepona</p>
            <p className="p-0 m-0">Estepona, Spain</p>
          </div>
          <div className="d-flex justify-content-center ">
            <button className=" rounded-pill p-2 text-black px-4 text-center mt-3 mt-md-0">
              View Project
            </button>
          </div>
        </div>

        <video
          className="main-video"
          autoPlay
          muted
          src="https://cdn.yodezeen.com/IMG_5700_1c0da35af8.mp4"
        ></video>

        {/* Desktop video */}
        <video
          className="main-video d-none d-md-block"
          autoPlay
          muted
          playsInline
          loop
          src="https://cdn.yodezeen.com/IMG_5700_1c0da35af8.mp4"
        />

        {/* Mobile video */}
        <video
          className="main-video d-block d-md-none"
          autoPlay
          muted
          playsInline
          loop
          src="https://cdn.yodezeen.com/IMG_8853_7c58f414e3.mp4"
        />
      </div>

      <div ref={containerRef} style={{ height: "300vh" }}>
        <div
          className="text-center position-sticky d-flex justify-content-center align-items-center"
          style={{ top: 0, height: "100vh", overflow: "hidden" }}
        >
          <motion.h4
            className="main-content text-uppercase"
            style={{
              x: firstX,
              opacity: firstOpacity,
              position: "absolute",
              width: "100%",
              padding: "0 2rem",
            }}
          >
            we design bespoke solutions for architecture and interior design
          </motion.h4>

          <motion.h4
            className="main-content text-uppercase"
            style={{
              x: secondX,
              opacity: secondOpacity,
              position: "absolute",
              width: "100%",
              padding: "0 2rem",
            }}
          >
            we strive for perfection in every detail
          </motion.h4>
        </div>
      </div>

      <section className="sec-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-7">
              <img
                src="https://cdn.yodezeen.com/extra_info_bg_1f618288fb.webp"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <div className="p-4 p-md-2">
                <p>
                  YODEZEEN IS AN INTERNATIONAL ARCHITECTURE AND DESIGN STUDIO
                  WITH A PORTFOLIO SPANNING HIGH-END PRIVATE RESIDENCES,
                  HOSPITALITY DESTINATIONS, AND VISIONARY COMMERCIAL SPACES
                  FOUNDED IN
                </p>
                <p className="fs-6">
                  FOUNDED IN 2010 BY ARTEM ZVEREV AND ARTUR SHARF, YODEZEEN AIMS
                  TO LEAVE A MARK IN ARCHITECTURE AND DESIGN BY CREATING
                  IMMERSIVE SPACES THAT LEAVE A LASTING IMPACT
                </p>
                <button className="text-capitalize btn btn-secondary rounded-pill text-bg-white">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Center
        left={"we"}
        center={"Residential Mixed Use Hospitality Commercial Public Spaces"}
        right={"do"}
      />

      {/* ── Sec-6 : Monograph ── */}
      <section className="sec-6" ref={sec6ref}>
        {/* Large background word */}
        <div className="text-uppercase sec-6-main sec-6-bg-word">mongoraf</div>

        <div className="container sec-6-inner">
          <div className="row align-items-center justify-content-between g-5">
            {/* Left: text block */}
            <div className="col-12 col-md-4 sec-6-text-col">
              <p className="sec-6-p">
                OUR FIRST MONOGRAPH IS A REFLECTION OF OUR PATH OF CREATION: OUR
                INSIGHTS, PROJECTS, IDEAS AND VISION WHICH WE ARE PROUD TO SHARE
                WITH EVERYONE WHO SHARES YODEZEEN's VALUES.
              </p>
              <button className="btn btn-secondary rounded-pill text-capitalize fs-6">
                coming soon
              </button>
            </div>

            {/* Center: animated book */}
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center sec-6-book-col">
              <motion.img
                src="https://cdn.yodezeen.com/book_18dd26a499.webp"
                alt="book-image"
                className="book-image"
                style={{
                  y: bookY,
                  opacity: bookOpacity,
                  rotate: bookRotate,
                  scale: bookScale,
                  boxShadow: bookShadow,
                  transformOrigin: "bottom center",
                  width: "100%",
                  maxWidth: "420px",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Bottom label */}
          <div className="col-12 sec-6-main sec-6-label text-end">Book</div>
        </div>
      </section>

      {/* Sec -7  */}
      <section className="sec-7">
        <div className="d-flex flex-column">
          <h3 className="countrey-name">London</h3>
          <h3 className="countrey-name">miammi</h3>
          <h3 className="countrey-name">dubai</h3>
          <h3 className="countrey-name">new york</h3>
          <h3 className="countrey-name">warsaw</h3>
          <h3 className="countrey-name">kyiv</h3>
          <h3 className="countrey-name">milan</h3>
        </div>
      </section>

      <div className="px-3">
        <Footer />
      </div>
    </>
  );
}

export default Home;
