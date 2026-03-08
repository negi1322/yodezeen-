import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "./Reused/Nav";
import Footer from "./Reused/Footer";

const Career = () => {
  const heroRef = useRef(null);
  const [jobimage, setJobImage] = useState("");

  const careerRole = [
    {
      title: "Concept Architect",
      location: "Worldwide",
      image: "https://cdn.yodezeen.com/extra_IMG_7009_127027dab8.webp",
    },
    {
      title: "Interior Designer",
      location: "Kyiv, Warsaw",
      image: "https://cdn.yodezeen.com/large_image_79_iz_376_9b2b51e2d0.jpg",
    },
    {
      title: "Project Manager",
      location: "Kyiv, Warsaw",
      image: "https://cdn.yodezeen.com/extra_image_14_iz_20_b36df65081.webp",
    },
    {
      title: "Revit Architect - Interiors",
      location: "Kyiv, Warsaw",
      image: "https://cdn.yodezeen.com/extra_image_74_iz_376_58b0b34cf9.webp",
    },
    {
      title: "Revit Architect - Exteriors",
      location: "Kyiv, Warsaw",
      image: "https://cdn.yodezeen.com/extra_IMG_7021_ead017ebb7.webp",
    },
    {
      title: "Supervising Architect",
      location: "Dubai",
      image: "https://cdn.yodezeen.com/extra_IMG_7019_abfbf7e6b6.webp",
    },
    {
      title: "Global PR Lead",
      location: "Worldwide",
      image: "https://cdn.yodezeen.com/extra_Y_860_062d32e9fd.webp",
    },
    {
      title: "Legal Specialist",
      location: "Warsaw",
      image: "https://cdn.yodezeen.com/large_Y_850_bc9a4645cb.jpg",
    },
    {
      title: "3D Visualizer",
      location: "Kyiv, Warsaw",
      image: "https://cdn.yodezeen.com/large_image_75iz665_e0ad69efcc.jpg",
    },
    {
      title: "Video Content Creator",
      location: "Worldwide",
      image: "https://cdn.yodezeen.com/extra_Y_860_062d32e9fd.webp",
    },
  ];
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const s1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.35], [0, -80]);

  const s2Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.65, 0.72],
    [0, 1, 1, 0],
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.65, 0.72],
    [70, 0, 0, -70],
  );

  const s3Opacity = useTransform(scrollYProgress, [0.72, 1, 1], [0, 1, 1]);
  const s3Y = useTransform(scrollYProgress, [1, 0.88, 1], [70, 0, 0]);

  return (
    <>
      <div ref={heroRef} style={{ minHeight: "400vh" }}>
        <div className="carrer-container position-sticky top-0">
          <Nav navcolor={"text-white"} />

          <video
            className="main-video"
            src="https://cdn.yodezeen.com/IMG_8167_563ffbf863.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Slide 1 */}
          <motion.div
            className="content-career"
            style={{ opacity: s1Opacity, y: s1Y, position: "absolute" }}
          >
            <h1 className="about-content text-white">
              Today I'm busy, designing the future
            </h1>
            <p className="text-white fw-bold fs-6 text-center pt-4 w-50 mx-auto career-stats-line">
              At YODEZEEN — 15 years, 8 offices around the world, 250 teammates
            </p>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            className="content-career text-center"
            style={{ opacity: s2Opacity, y: s2Y, position: "absolute" }}
          >
            <h1 className="about-content text-white">for 15 years</h1>
          </motion.div>

          {/* Slide 3 + 4 appear together */}
          <motion.div
            className="content-career"
            style={{ opacity: s3Opacity, y: s3Y, position: "absolute" }}
          >
            <h1 className="about-content text-white">
              8 offices around the world
            </h1>
            <h1 className="about-content text-white">250 teammates</h1>
          </motion.div>
        </div>
      </div>

      <section
        className="sec-2-career"
        style={{
          backgroundImage: `url(${jobimage})`,
          backgroundSize: "cover",
          backgroundPosition: "top , center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex gap-2 flex-column">
          {careerRole?.map((i, key) => (
            <div className="text-md-center" key={key}>
              <motion.h1
                onMouseEnter={() => {
                  setJobImage(i?.image);
                }}
                whileHover={{
                  fontWeight: "bold",
                  scale: 1.04,
                }}
                className={
                  jobimage
                    ? "about-content text-black fs-1 text-white"
                    : "about-content text-black fs-1"
                }
              >
                {i?.title} <span className="fs-6 fw-light">{i?.location}</span>
              </motion.h1>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-3">
        <div className="container text-center">
          <div className=" flex-column gap-3 row position-relative">
            <div className="text-center col-12 carrer-position-absolute">
              <h1
                className="about-content  mx-auto"
                style={{ fontSize: "70px", width: "60%" }}
              >
                DID NOT FIND THE POSITION THAT WORKS FOR YOU?
              </h1>
              <button className="rounded-pill px-4 btn-light py-1">
                Let's talk
              </button>
            </div>
            <div className="col-12 position-relative ">
              <video
                className="career-video img-fluid "
                src="https://cdn.yodezeen.com/IMG_9669_30de72f373_f01ba45ed5.mp4"
                muted
                autoPlay
              ></video>
              <div className="container position-md-absolute position-relative  bottom-0">
                <Footer color={"text-white"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
