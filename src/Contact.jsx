import { motion } from "framer-motion";
import Nav from "./Reused/Nav";
import Footer from "./Reused/Footer";

const Contact = () => {
  const data = [
    {
      category: "General Inquiries",
      email: "info@yodezeen.com",
    },
    {
      category: "PR & Collaborations",
      email: "pr@yodezeen.com",
    },
    {
      category: "Careers",
      email: "hr@yodezeen.com",
    },
    {
      category: "Book Offline",
      email: "info@yodezeen.com",
    },
    {
      category: "Become a Supplier",
      email: "suppliers@yodezeen.com",
    },
    {
      category: "Development Partnership",
      email: "partners@yodezeen.com",
    },
  ];
  return (
    <>
      <div className="contact-container">
        <div>
          <Nav />
        </div>

        {/* Sec -7  */}
        <section className="sec-7">
          <div className="d-flex flex-column sec-7-flex-box">
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              London <span className="fs-6 text-start fw-light">12:09pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              miammi <span className="fs-6 text-start fw-light">7:00pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              dubai <span className="fs-6 text-start fw-light">12:09pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              new york <span className="fs-6 text-start fw-light">12:09pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              warsaw <span className="fs-6 text-start fw-light">8:30pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              kyiv <span className="fs-6 text-start fw-light">12:09pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
            <motion.h3
              whileHover={{ height: "100%" }}
              className="countrey-name"
            >
              milan <span className="fs-6 text-start fw-light">10:00pm</span>
              <div className="d-flex flex-column justify-content-between">
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">P.</span> +44 73 8888 9977
                </p>
                <p className="text-black fw-light fs-6 m-2">
                  <span className="me-2">A.</span> 70 Brompton Road, London, SW3
                  1ER, UK
                </p>
              </div>
            </motion.h3>
          </div>
        </section>
        <section className="pt-5">
          <div className="container-xxl">
            <div className="gap-5 d-grid">
              {data?.map((i, key) => (
                <div key={key}>
                  <p className="text-black fw-light fs-6 mb-0 ">
                    {i?.category}
                  </p>
                  <p className="border-black text-black fw-light fs-5 border-bottom border-1 w-fit">
                    {i?.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
