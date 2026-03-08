import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = ({ navcolor }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavItem, setopenNavItem] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceImage, setServiceImage] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [service, setservice] = useState(false);
  const [about, setAbout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (openNavItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNavItem]);

  useEffect(() => {
    setAbout(false);
    setservice(false);
    setopenNavItem(false);
  }, [location.pathname]);

  return (
    <>
      {/* Dropdown panel — stays open while mouse is inside it */}
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
        onMouseEnter={() => setopenNavItem(true)}
        onMouseLeave={() => {
          setopenNavItem(false);
          setservice(false);
        }}
      >
        {service ? (
          <div
            className="services-background-image"
            style={{
              backgroundImage: `url(${serviceImage})`,
            }}
          >
            <div className="container">
              <div className="d-flex flex-column gap-1">
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/extra_magnific_YJY_Rzy_Tlr1_Am_B_Ct9akp_K_magnific_y_Uxk_U_Th_A_Ej_It_RC_1w_Yuo_U_Screenshot_2024_09_13_094738_scaled_1_7644c3cd33.webp",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Hotels & Resorts
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/extra_3620s_GULFSTREAM_EXTERIOR_FINAL_16_04_9fd8c7a0dd.webp",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Private jets
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/extra_1_6_1e215fe69e.webp",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Public & Space
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/extra_ARCH_8sss6_bd57a53d88.webp",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Residence
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/extra_ely_bsc_photography_Eleonora_Boscarelli_043_1_1_8867e1f0e6.webp",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Restaurats
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.3, color: "#ffff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/large_yacht_preview3_e349d25a7b.jpg",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Yachts
                </motion.span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </motion.div>

      {about ? (
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
          onMouseEnter={() => setopenNavItem(true)}
          onMouseLeave={() => {
            setopenNavItem(false);
            setAbout(false);
          }}
        >
          <div
            className="services-background-image"
            style={{
              backgroundImage: `url(${serviceImage})`,
            }}
          >
            <div className="container">
              <div className="d-flex flex-column gap-1 w-100  align-items-end ">
                <span
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/large_image_79_iz_376_9b2b51e2d0.jpg",
                    )
                  }
                  onClick={() => navigate("/news")}
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  News
                </span>
                <span
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/large_section_2_22f46a1652.webp",
                    )
                  }
                  onClick={() => navigate("/about")}
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  About
                </span>
                <span
                  onMouseEnter={() =>
                    setServiceImage(
                      "https://cdn.yodezeen.com/large_Y_850_bc9a4645cb.jpg",
                    )
                  }
                  onMouseLeave={() => setServiceImage("")}
                  className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
                >
                  Team
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}

      <div
        className={"nav-bar"}
        style={{
          transform: navHidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s ease",
        }}
      >
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <ul className="list-unstyled d-none d-md-flex justify-content-between align-items-center py-3 m-0">
              <li
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => setopenNavItem(false)}
              >
                Projects
              </li>

              <motion.li
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => {
                  setAbout(false);
                  setservice(true);
                  setopenNavItem(true);
                }}
                onMouseLeave={() => setopenNavItem(false)}
                onClick={() => navigate("/service")}
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  scale: 1.2,
                  backdropFilter: "blur(10px)",
                  color: "#FFFFFF",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                Services
              </motion.li>

              <motion.li
                onClick={() => navigate("/contact")}
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => setopenNavItem(false)}
                whileHover={{
                  color: "ffff",
                  fontWeight: "bold",
                  scale: 1.04,
                  borderBottom: "2px solid white",
                }}
              >
                Contact
              </motion.li>
            </ul>
          </div>

          <div className="col-md-1 d-none d-md-block">
            <img
              onClick={() => navigate("/")}
              onMouseEnter={() => setopenNavItem(false)}
              src="https://yodezeen.com/icons/logo.svg"
              className="img-fluid pointer "
              alt="logo"
            />
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled d-none d-md-flex justify-content-between align-items-center py-3 m-0">
              <motion.li
                whileHover={{
                  color: "ffff",
                  fontWeight: "bold",
                  scale: 1.04,
                  borderBottom: "2px solid white",
                }}
                onMouseLeave={() => setopenNavItem(false)}
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => {
                  setservice(false);
                  setopenNavItem(true);
                  setAbout(true);
                }}
              >
                About
              </motion.li>
              <motion.li
                whileHover={{
                  color: "ffff",
                  fontWeight: "bold",
                  scale: 1.04,
                  borderBottom: "2px solid white",
                }}
                onClick={() => navigate("/career")}
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => setopenNavItem(false)}
              >
                Career
              </motion.li>
              <motion.li
                whileHover={{
                  color: "ffff",
                  fontWeight: "bold",
                  scale: 1.04,
                  borderBottom: "2px solid white",
                }}
                onClick={() => navigate("/talk")}
                className={`text-black fs-6 ${navcolor}`}
                onMouseEnter={() => setopenNavItem(false)}
              >
                Let's Talk
              </motion.li>
            </ul>
          </div>
        </div>

        {/* For mobile */}
        <div className="container-xxl d-md-none d-block ">
          <div className="row justify-content-between align-items-center">
            <div className="col-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className=" mobile-nav-icon pointer"
                aria-label="Toggle menu"
              >
                <i
                  className={
                    menuOpen ? "bi bi-list fs-3 text-black" : "bi bi-list fs-3"
                  }
                ></i>
              </button>
              <div
                className="nav-item-container"
                style={{
                  maxHeight: menuOpen ? "100vh" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div className="container">
                  <div className="iteeem">
                    {[
                      
                      "Services",
                      "Contact",
                      "About",
                      "News",
                      "Career",
                      "Let's Talk",
                      "Projects"
                    ].map((item) => (
                      <div
                        onClick={() => {
                          if (item === "Services") {
                            navigate("/service");
                          } else if (item === "Contact") {
                            navigate("/contact");
                          } else if (item === "News") {
                            navigate("/news");
                          } else if (item === "About") {
                            navigate("/about");
                          } else if (item === "Career") {
                            navigate("/career");
                          } else if (item === "Let's Talk") {
                            navigate("/Talk");
                          }
                        }}
                        key={item}
                        className="text-black about-content"
                        style={{ fontSize: "40px" }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <a
                data-v-f87b65f2=""
                aria-current="page"
                href="/"
                className={
                  menuOpen
                    ? "router-link-active router-link-exact-active logo-link bg-black p-2"
                    : "router-link-active router-link-exact-active logo-link"
                }
              >
                <svg
                  data-v-f87b65f2=""
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1248.29 245.15"
                  className="logo"
                >
                  <path
                    fill="#FAFAFA"
                    d="M55.21,241.35v-86.15L2,3.8h44.66l31.36,98.19L109.37,3.8h44.67l-53.22,151.4v86.15h-45.61Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M166.67,162.8v-80.45C166.67,27.24,194.86,0,241.11,0s74.43,27.24,74.43,82.35v80.45c0,55.42-28.19,82.34-74.43,82.34s-74.43-26.92-74.43-82.34ZM269.61,163.74v-82.34c0-31.05-10.76-41.18-28.5-41.18s-28.51,10.13-28.51,41.18v82.34c0,31.05,10.45,41.18,28.51,41.18s28.5-10.13,28.5-41.18Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M494.03,83.61v77.92c0,53.21-28.19,79.82-74.43,79.82h-71.27V3.8h71.27c46.24,0,74.43,26.61,74.43,79.82ZM448.1,162.17v-79.19c0-29.13-10.76-38.64-28.5-38.64h-25.35v156.47h25.35c17.73,0,28.5-9.51,28.5-38.64Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M638.53,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M741.63,44.34h-78.55V3.8h121.94v50.05l-80.14,146.96h83.31v40.54h-126.69v-50.05l80.13-146.96Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M925.62,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M1069.37,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M1209.02,206.83V3.8h39.27v237.55h-70.31l-39.28-205.88v205.88h-39.27V3.8h70.32l39.27,203.03Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="col-2 pointer">
              <button
                onClick={() => navigate("/contact")}
                className="mobile-nav-icon"
              >
                <i
                  className={
                    menuOpen ? "text-black bi bi-send fs-6" : "bi bi-send fs-6"
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Nav;
