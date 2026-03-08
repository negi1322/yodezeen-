import { useNavigate } from "react-router-dom";
import Center from "./Reused/Center";
import Footer from "./Reused/Footer";
import Nav from "./Reused/Nav";
import { motion } from "framer-motion";

const Service = () => {
  const navigate = useNavigate();
  const servicepart = [
    {
      image:
        "https://cdn.yodezeen.com/extra_magnific_YJY_Rzy_Tlr1_Am_B_Ct9akp_K_magnific_y_Uxk_U_Th_A_Ej_It_RC_1w_Yuo_U_Screenshot_2024_09_13_094738_scaled_1_7644c3cd33.webp",
      text: "Hotel & Resort",
    },
    {
      image:
        "https://cdn.yodezeen.com/extra_3620sss_GULFSTREAM_EXTERIOR_FINAL_16_04_f83dd6062b.webp",
      text: "Private jets",
    },
    {
      image: "https://cdn.yodezeen.com/extra_1_6_1e215fe69e.webp",
      text: "Public & Space",
    },
    {
      image: "https://cdn.yodezeen.com/extra_ARCH_8sss6_bd57a53d88.webp",
      text: "Residence",
    },
    {
      image:
        "https://cdn.yodezeen.com/extra_ely_bsc_photography_Eleonora_Boscarelli_043_1_1_8867e1f0e6.webp",
      text: "Restaurats",
    },
    {
      image: "https://cdn.yodezeen.com/large_yacht_preview3_e349d25a7b.jpg",
      text: "Yachts",
    },
  ];
  return (
    <>
      <Nav navbg={"bg-black"} />

      <div className="service-route-container pt100">
        <div className="px-3">
          <div className="text-uppercase text-black fs-1 text-center my-4 fw-bold">
            all services
          </div>
          <div className="row ">
            {servicepart?.map((i, key) => (
              <motion.div className="col-md-6 pointer">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="my-2 d-flex align-items-end justify-content-center"
                  style={{
                    backgroundImage: `url(${i?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    width: "100%",
                  }}
                >
                  <div className="p-3 text-center">
                    <p className="text-white fs-2 fw-bold m-0 ">{i?.text}</p>
                    <button
                      onClick={() => navigate(`/detail/${i?.text}`)}
                      className="rounded-pill p-2 text-black px-4 text-center mt-3 mt-md-0 text-capitalize "
                    >
                      read more
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Center left={"Let's"} center={"about your project!"} right={"Talk"} />
      </div>

      <div className="px-3">
        <Footer />
      </div>
    </>
  );
};

export default Service;
