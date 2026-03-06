import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Nav from "./Reused/Nav";

function Home() {
  const containerRef = useRef(null);
  const sec5Ref = useRef(null);
  const sec6ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const firstX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-150%"]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const secondX = useTransform(scrollYProgress, [0.4, 0.8], ["150%", "0%"]);
  const secondOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  // sec-5 scroll
  const { scrollYProgress: sec5Progress } = useScroll({
    target: sec5Ref,
    offset: ["start center", "end start"],
  });

  const weX = useTransform(sec5Progress, [0, 0.6], ["0%", "-80%"]);
  const doX = useTransform(sec5Progress, [0, 0.6], ["0%", "80%"]);
  const headingOpacity = useTransform(sec5Progress, [0, 0.4], [1, 0.2]);
  const centerOpacity = useTransform(sec5Progress, [0.2, 0.6], [0, 1]);
  const centerScale = useTransform(sec5Progress, [0.2, 0.6], [0.8, 1]);

  // sec-6 scroll
  const { scrollYProgress: sec6Progress } = useScroll({
    target: sec6ref,
    offset: ["start end", "end start"],
  });

  // moves left on scroll
  const bookX = useTransform(sec6Progress, [0, 1], ["0%", "-40%"]);
  // shrinks on scroll
  const bookScale = useTransform(sec6Progress, [0, 0.5], [1, 0.75]);
  // rotates back to 0 as you scroll
  const bookRotate = useTransform(sec6Progress, [0, 0.5], [-25, 0]);
  return (
    <>
      <div className="main-home">
        <Nav />
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
        <div>
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

      <section className="sec-4"></section>

      {/* sec-5 with sticky scroll animation */}
      <section ref={sec5Ref} className="sec-5" style={{ height: "200vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h2
            className="sec-5-conent"
            style={{
              x: weX,
              opacity: headingOpacity,
              position: "absolute",
              left: "25%",
            }}
          >
            We
          </motion.h2>

          <motion.div
            style={{
              opacity: centerOpacity,
              scale: centerScale,
              position: "absolute",
              textAlign: "center",
              zIndex: 10,
              maxWidth: "400px",
            }}
          >
            <p className="sec-5-center-content">
              Residential Mixed Use Hospitality Commercial Public Spaces
            </p>
          </motion.div>

          <motion.h2
            className="sec-5-conent"
            style={{
              x: doX,
              opacity: headingOpacity,
              position: "absolute",
              right: "25%",
            }}
          >
            Do
          </motion.h2>
        </div>
      </section>

      {/* Sec-6 */}
      <section className="sec-6">
        <div className="text-uppercase sec-6-main">mongoraf</div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <p className="sec-6-p">
                OUR FIRST MONOGRAPH IS A REFLECTION OF OUR PATH OF CREATION: OUR
                INSIGHTS, PROJECTS, IDEAS AND VISION WHICH WE ARE PROUD TO SHARE
                WITH EVERYONE WHO SHARES YODEZEEN's VALUES.
              </p>
              <button className="btn btn-secondary rounded-pill text-capitalize fs-6">
                coming soon
              </button>
            </div>
            <div className="col-md-5" ref={sec6ref}>
              <div>
                <motion.img
                  src="https://cdn.yodezeen.com/book_18dd26a499.webp"
                  alt="book-image"
                  className="book-image"
                  initial={{ rotate: 50 }}
                  style={{
                    x: bookX,
                    scale: bookScale,
                    rotate: bookRotate,
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </div>
            <div className="col-12 sec-6-main text-end">Book</div>
          </div>
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

      <footer>
        <div className="w-50 mx-auto">
          <p className="text-black">
            Please, be informed, that the intellectual property rights to all
            the photos, designs and other materials on this Site belong to
            "YODEZEEN GROUP" LLC. You may request permission to use them by
            contacting us at: privacy@yodezeen.com
          </p>
        </div>

        <div className="d-flex gap-2 justify-content-center my-3">
          <button className="bg-black rounded-circle">
            <i className="bi bi-instagram text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-youtube text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-facebook text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-linkedin text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-twitter-x text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-pinterest text-white"></i>
          </button>
        </div>
        <div className="d-flex justify-content-between align-content-center">
          <p className="m-0">© 2026 YODEZEEN. All rights reserved.</p>
          <span>
            <ul className="d-flex gap-2 list-unstyled">
              <li className="text-uppercase fw-medium text-black">
                privacy policy
              </li>
              <li className="text-uppercase fw-medium text-black">
                terms of use
              </li>
              <li className="text-uppercase fw-medium text-black">
                accessibility statement
              </li>
              <li className="text-uppercase fs-6 text-black">contact us</li>
            </ul>
          </span>
          <p className="m-0">Made by The First The Last</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
