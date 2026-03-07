import Nav from "./Reused/Nav";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <>
      <Nav />
      <div ref={containerRef} className="about-bg about-scroll-container">
        <div ref={sectionRef} className="about-scroll-content">
          <div className="about-sticky-view position-sticky top-0">
            <div className="row align-items-center position-relative h-100">
              {/* LEFT IMAGE */}
              <motion.div
                className="col-md-6"
                style={{
                  x: leftX,
                  backgroundImage: "url(https://yodezeen.com/about/person-1.webp)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                }}
              />

              {/* TEXT */}
              <motion.div
                style={{ scale: textScale, y: textY }}
                className="position-absolute w-100 d-flex justify-content-center"
              >
                <div className="d-flex flex-column">
                  <span className="about-content text-center">We're</span>
                  <span className="about-content text-center">yodezeen</span>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                className="col-md-6"
                style={{
                  x: rightX,
                  backgroundImage: "url(https://yodezeen.com/about/person-2.webp)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
