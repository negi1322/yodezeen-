import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavItem, setopenNavItem] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceImage, setServiceImage] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

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
        onMouseLeave={() => setopenNavItem(false)}
      >
        <div
          className="services-background-image"
          style={{
            backgroundImage: `url(${serviceImage})`,
          }}
        >
          <div className="container">
            <div className="d-flex flex-column gap-1">
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/extra_magnific_YJY_Rzy_Tlr1_Am_B_Ct9akp_K_magnific_y_Uxk_U_Th_A_Ej_It_RC_1w_Yuo_U_Screenshot_2024_09_13_094738_scaled_1_7644c3cd33.webp",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Hotels & Resorts
              </span>
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/extra_3620s_GULFSTREAM_EXTERIOR_FINAL_16_04_9fd8c7a0dd.webp",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Private jets
              </span>
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/extra_1_6_1e215fe69e.webp",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Public & Space
              </span>
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/extra_ARCH_8sss6_bd57a53d88.webp",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Residence
              </span>
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/extra_ely_bsc_photography_Eleonora_Boscarelli_043_1_1_8867e1f0e6.webp",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Restaurats
              </span>
              <span
                onMouseEnter={() =>
                  setServiceImage(
                    "https://cdn.yodezeen.com/large_yacht_preview3_e349d25a7b.jpg",
                  )
                }
                onMouseLeave={() => setServiceImage("")}
                className={`services-content ${serviceImage ? "text-white" : "text-black"}`}
              >
                Yachts
              </span>
            </div>
          </div>
        </div>
      </motion.div>

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
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(false)}
              >
                Projects
              </li>

              <li
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(true)}
                onMouseLeave={() => setopenNavItem(false)}
                onClick={() => navigate("/service")}
              >
                Services
              </li>

              <li
                onClick={() => navigate("/contact")}
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(false)}
              >
                Contact
              </li>
            </ul>
          </div>

          <div className="col-md-1 d-none d-md-block">
            <img
              onClick={() => navigate("/")}
              onMouseEnter={() => setopenNavItem(false)}
              src="https://yodezeen.com/icons/logo.svg"
              className="img-fluid pointer"
              alt="logo"
            />
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled d-none d-md-flex justify-content-between align-items-center py-3 m-0">
              <li
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(false)}
              >
                About
              </li>
              <li
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(false)}
              >
                Career
              </li>
              <li
                className="text-black fs-6"
                onMouseEnter={() => setopenNavItem(false)}
              >
                Let's Talk
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex d-md-none justify-content-between align-items-center py-3 px-3">
          <div>
            <img
              onClick={() => navigate("/")}
              src="https://yodezeen.com/icons/logo.svg"
              alt=""
              className="img-fluid position-absolute w-25 pointer"
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border-0 bg-transparent p-0 "
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
                onClick={() => {
                  if (item === "Services") {
                    navigate("/service");
                  }else if(item === "Contact"){
                    navigate("/contact")
                  }
                }}
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
    </>
  );
};

export default Nav;
