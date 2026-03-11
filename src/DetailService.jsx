import { useParams } from "react-router-dom";
import Footer from "./Reused/Footer";
import Nav from "./Reused/Nav";
import Center from "./Reused/Center";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import database from "./Data/Images.json";
const DetailService = () => {
  const { service } = useParams();
  const [changeImages, setChangeImages] = useState(0);

  const SameData = database?.filter((i) => i?.serviceName === service);
  const image = SameData?.[0]?.loopImage;
  const images = [];
  for (let a of image) {
    images?.push(a);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setChangeImages((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="main-detail-page"
        style={{ backgroundImage: `url(${SameData?.[0]?.mainImage?.[0]})` }}
      >
        <Nav />
        <p className="main-detail-page-content">{service}</p>
      </div>

      <section className="detail-service-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h1 className="text-center">Work</h1>
              <h1>Process</h1>
              <p className="my-2 text-center">
                Where architecture meets emotion—we design hotel experiences
                that guests remember long after checkout.
              </p>
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row pt-5 gap-3 gap-md-0 ">
            <div className="col-md-9 position-relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  whileHover={{ scale: 1 }}
                  key={changeImages}
                  src={images[changeImages]}
                  alt="slider"
                  className="img-fluid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <div className="col-md-3 px-5 d-flex align-items-center ">
              <div>
                <h4>Architectural Concept</h4>
                <p>
                  FF&E and Budgeting Furniture, lighting, and decorative
                  elements are selected for both visual impact and long-term
                  performance. We coordinate with global suppliers, optimizing
                  costs without compromising quality.
                </p>
              </div>
            </div>
            <div className="col-12 text-center my-5">
              <p className="bold-text-content py-4">
                Let us help you design a space that truly reflects your unique
                style and needs
              </p>
              <button className="btn rounded-pill bg-secondary px-4 text-white">
                send request
              </button>
            </div>

            <div className="col-md-6 mt-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="position-relative pointer my-2 d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${SameData?.[0]?.frontImage?.[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "400px 0px",
                }}
              >
                <div className=" text-white position-absolute bottom-0 mb-4 ">
                  <p className="small text-uppercase mb-2">Tbilisi, Georgia</p>
                  <p className="fw-bold display-2 text-uppercase fs-1">
                    Art Hotel
                  </p>
                  <button className="btn rounded-pill px-4 py-2 mt-3 bg-light text-dark">
                    View Project
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="col-md-6 mt-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="my-2 d-flex align-items-end justify-content-center position-relative"
                style={{
                  backgroundImage: `url(${SameData?.[0]?.frontImage?.[1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "400px 0px",
                }}
              >
                <div className=" text-white position-absolute bottom-0 mb-4">
                  <p className="small text-uppercase mb-2">Tbilisi, Georgia</p>
                  <p className="fw-bold display-2 text-uppercase fs-1">
                    Art Hotel
                  </p>
                  <button className="btn rounded-pill px-4 py-2 mt-3 bg-light text-dark">
                    View Project
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div>
          <Center
            left={"Other"}
            center={
              <ul className="nav-links list-unstyled">
                <li className="pointer center-services-hover">Projects</li>
                <li className="pointer center-services-hover">Services</li>
                <li className="pointer center-services-hover">Contact</li>
              </ul>
            }
            right={"services"}
          />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default DetailService;
