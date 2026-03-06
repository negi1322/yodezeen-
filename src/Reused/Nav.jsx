import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavItem, setopenNavItem] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          height: openNavItem ? "100vh" : "0vh",
        }}
        transition={{
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="nav-hover text-center"
        style={{ overflow: "hidden" }}
      >
        <h4 className="h4 text-black ">Feature will added soon</h4>{" "}
      </motion.div>
      <div className={`nav-bar ${scrolled ? "nav-bar bg-secondary" : "nav-bar"}`}>
        {/* Desktop Nav */}
        <ul className="list-unstyled d-none d-md-flex justify-content-between align-items-center py-3 m-0">
          <li
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
          >
            Projects
          </li>
          <li
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
          >
            Services
          </li>
          <li
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
          >
            Contact
          </li>
          <li className="text-capitalize nav-para ">
            <strong
              className={
                openNavItem
                  ? "null"
                  : "text-capitalize nav-para text-white "
              }
            >
              YODZEEN
            </strong>
          </li>
          <li
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
          >
            About
          </li>
          <li
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
          >
            Career
          </li>
          <li
            onMouseEnter={() => {
              console.log("capture");
              setopenNavItem(true);
            }}
            onMouseLeave={() => {
              setopenNavItem(false);
            }}
            className={
              openNavItem
                ? "null"
                : "text-capitalize nav-para text-white "
            }
          >
            Let's Talk
          </li>
        </ul>

        <div className="d-flex d-md-none justify-content-between align-items-center py-3 px-3">
          <strong className="text-capitalize brand-name">YODZEEN</strong>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border-0 bg-transparent p-0"
            aria-label="Toggle menu"
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000",
                margin: "5px 0",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000",
                margin: "5px 0",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000",
                margin: "5px 0",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>

        <div
          style={{
            maxHeight: menuOpen ? "400px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
          className="d-md-none"
        >
          <ul className="list-unstyled m-0 px-3 pb-3">
            {[
              "Projects",
              "Services",
              "Contact",
              "About",
              "Career",
              "Let's Talk",
            ].map((item) => (
              <li
                key={item}
                className="text-capitalize nav-para text-white py-2"
                style={{ borderBottom: "1px solid #eee" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="upper-video-content d-flex justify-content-between align-items-center">
        <div className="d-flex gap-5 align-items-center justify-content-between ">
          <p className="p-0 m-0 ">Residential Complex in Estepona</p>
          <p className="p-0 m-0">Estepona, Spain</p>
        </div>
        <span>
          <button className=" rounded-pill p-2 text-black">View Project</button>
        </span>
      </div>
      <div className="video-container">
        <video
          autoPlay
          muted
          playsInline
          src="https://cdn.yodezeen.com/IMG_5700_1c0da35af8.mp4"
        ></video>
      </div>
    </>
  );
};

export default Nav;
