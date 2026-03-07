import { motion } from "framer-motion";
import Nav from "./Reused/Nav";

const News = () => {
  return (
    <>
      <div className="news-container">
        <motion.div
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.05)",
            boxShadow: "none",
          }}
        >
          <Nav />
        </motion.div>
        <div className="row">
          <div
            className="col-md-8 position-relative news-image-container"
            style={{
              backgroundImage: `url(${"https://cdn.yodezeen.com/extra_Frame_36_5bd6056f7e.webp"})`,
            }}
          >
            <div className="px-5 d-flex justify-content-between align-items-center position-absolute bottom-0">
              <span className="text-white fs-2 mb-0 fw-bold w-50">
                Dragonfly by YODEZEEN Earns Michelin Recognition
              </span>
              <button className="px-4 btn rounded-pill bg-white text-black  text-capitalize">
                more info
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container-news-images">
              <div className="news-image-grid">
                <div className=" text-center">
                  <img
                    src="https://cdn.yodezeen.com/medium_lodge_1a32f76cab.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <p className="text-black fs-6 text-center my-3">
                    The Lodge by YODEZEEN shortlisted for the World Architecture
                    Festival
                  </p>
                  <button className="btn btn-dark text-white rounded-pill px-4  text-capitalize py-1">
                    More info
                  </button>
                </div>
                <div className=" text-center">
                  <img
                    src="https://cdn.yodezeen.com/medium_lodge_1a32f76cab.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <p className="text-black fs-6 text-center my-3">
                    The Lodge by YODEZEEN shortlisted for the World Architecture
                    Festival
                  </p>
                  <button className="btn btn-dark text-white rounded-pill px-4  text-capitalize py-1">
                    More info
                  </button>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.yodezeen.com/medium_lodge_1a32f76cab.webp"
                    alt=""
                    className="img-fluid"
                  />
                  <p className="text-black fs-6 text-center my-3">
                    The Lodge by YODEZEEN shortlisted for the World Architecture
                    Festival
                  </p>
                  <button className="btn btn-dark text-white rounded-pill px-4  text-capitalize py-1">
                    More info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
