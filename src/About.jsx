import Nav from "./Reused/Nav";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const sec2Ref = useRef(null);

  const teamsData = [
    {
      name: "Artur Sharf",
      position: "Co-founder & Lead architect",
      image: "https://cdn.yodezeen.com/medium_Artur_1e8adb041b.webp",
    },
    {
      name: "Artem Zverev",
      position: "Co-founder & Lead architect",
      image:
        "https://cdn.yodezeen.com/medium_Artem_Zverev_Black_c4d293e184.webp",
    },
    {
      name: "Anna Tarabanova",
      position: "Managing partner & Lead designer",
      image: "https://cdn.yodezeen.com/medium_IMG_9508_1_db43aa0fb0.jpg",
    },
    {
      name: "Yuliia Kliakhina",
      position: "Managing partner & Lead designer",
      image: "https://cdn.yodezeen.com/medium_IMG_0386_0dc1f15f7a.JPG",
    },
    {
      name: "Vlad Brodovskyi",
      position: "Managing partner & Lead architect",
      image: "https://cdn.yodezeen.com/medium_VLAD_BRODOVSKYI_23215a5280.webp",
    },
    {
      name: "Kateryna Kipchuk",
      position: "Managing partner & Lead architect",
      image: "https://cdn.yodezeen.com/medium_image_54of84_cd74db7dbf.webp",
    },
    {
      name: "Veronika Supruniuk",
      position: "Managing partner & Lead architect",
      image: "https://cdn.yodezeen.com/medium_VERONIKA_S_ARCH_60d90cb5eb.webp",
    },
  ];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 2], [0, -400]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.65]);

  const { scrollYProgress: sec2Progress } = useScroll({
    target: sec2Ref,
    offset: ["start end", "center center"],
  });
  const imageOpacity = useTransform(sec2Progress, [0, 0.3], [0, 1]);
  const imageY = useTransform(sec2Progress, [0, 0.35], [80, 0]);
  const imageRotate = useTransform(sec2Progress, [0.2, 0.6], [-15, 0]);

  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  const { scrollYProgress: videoProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(videoProgress, [0, 0.35], ["80px", "0px"]);
  const opacity = useTransform(videoProgress, [0, 0.35], [0, 1]);
  const scale = useTransform(videoProgress, [0, 0.35], [0.88, 1]);
  const videoWidth = useTransform(videoProgress, [0.5, 1], ["100%", "0%"]);

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
                  backgroundImage:
                    "url(https://yodezeen.com/about/person-1.webp)",
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
                  <motion.p
                    style={{ opacity: textOpacity }}
                    className="w-25 mx-auto text-center fs-5 text-white "
                  >
                    We create spaces that enrich lives and inspire emotions,
                    blending form, function, and storytelling to craft
                    experiences that resonate deeply with each space and its
                    inhabitants.
                  </motion.p>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                className="col-md-6"
                style={{
                  x: rightX,
                  backgroundImage:
                    "url(https://yodezeen.com/about/person-2.webp)",
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
      <section
        ref={sec2Ref}
        className="about-sec-2 d-flex align-items-center justify-content-center position-relative"
      >
        <div>
          <p className="mb-0 text-center fs-4 fw-bold text-uppercase">
            why us?
          </p>
          <p className="bold-text-content" style={{ fontSize: "50px" }}>
            5 Resaons
          </p>
          <p className="bold-text-content" style={{ fontSize: "50px" }}>
            to be with yodezeen{" "}
          </p>
        </div>

        <motion.div
          className="animated-about-image position-absolute"
          style={{
            opacity: imageOpacity,
            y: imageY,
            rotate: imageRotate,
          }}
        />
      </section>

      <section ref={videoSectionRef} style={{ minHeight: "200vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <motion.div
            ref={videoRef}
            style={{
              y,
              opacity,
              scale,
              width: videoWidth,
              transformOrigin: "center center",
              overflow: "hidden",
            }}
          >
            <video
              className="w-100 h-100"
              src="https://cdn.yodezeen.com/career_work_video_4a05e3e731.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container-xxl">
          <div className="row py-5 align-items-center">
            <div className="col-md-3 col-12">
              <p className="text-white  fw-bold fs-1">A conversation</p>
            </div>
            <div className="col-md-6 col-12">
              <video
                className="w-100 h-100"
                src="https://cdn.yodezeen.com/IMG_5578_b724a6157c.MOV"
                muted
                loop
                controls
                playsInline
              />
            </div>
            <div className="col-md-3 col-12">
              <p className="text-white  fw-bold fs-1">
                <p className="text-white  fw-bold fs-1">A conversation</p>
              </p>
            </div>

            <div className="col-12 my-5">
              <p className="text-white fs-6 text-black text-uppercase">team</p>
              <p className="text-white  fw-bold fs-1 text-uppercase">
                Integral parts of yodezeen
              </p>
            </div>
            <div className="col-12">
              <div className="team-grid">
                {teamsData?.map((i, key) => (
                  <div key={key} className="team-subgid ">
                    <div className="member-image">
                      <img src={i?.image} alt="" className="img-fluid" />
                    </div>
                    <div className="my-3">
                      <p className="text-white fs-5 text-capitalize m-0">
                        {i?.name}
                      </p>
                      <p className="text-secondary fs-5 text-capitalize">
                        {i?.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
