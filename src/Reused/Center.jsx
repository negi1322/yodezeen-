import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Center = ({
  center,
  left,
  right,
  colorleft,
  colorcenter,
  colorright,
}) => {
  const sec5Ref = useRef(null);
  // sec-5 scroll
  const { scrollYProgress: sec5Progress } = useScroll({
    target: sec5Ref,
    offset: ["start center", "end start"],
  });

  const weX = useTransform(sec5Progress, [0, 0.6], ["0%", "-80%"]);
  const doX = useTransform(sec5Progress, [0, 0.6], ["0%", "80%"]);
  const headingOpacity = useTransform(sec5Progress, [0, 0.4], [1, 0.2]);
  const centerOpacity = useTransform(sec5Progress, [0.2, 0.6], [0, 1]);
  const centerScale = useTransform(sec5Progress, [0.2, 0.6], [0.8, 1]);
  return (
    <>
      {/* sec-5 with sticky scroll animation */}
      <section ref={sec5Ref} className="sec-5" style={{ height: "200vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h2
            className={`sec-5-conent text-uppercase ${colorleft}`}
            style={{
              x: weX,
              opacity: headingOpacity,
              position: "absolute",
              left: "25%",
            }}
          >
            {left}
          </motion.h2>

          <motion.div
            style={{
              opacity: centerOpacity,
              scale: centerScale,
              position: "absolute",
              textAlign: "center",
              zIndex: 10,
              maxWidth: "400px",
            }}
          >
            <p
              className={`sec-5-center-content text-uppercase fw-bolder ${colorcenter}`}
            >
              {center}
            </p>
          </motion.div>

          <motion.h2
            className={`sec-5-conent text-uppercase ${colorright}`}
            style={{
              x: doX,
              opacity: headingOpacity,
              position: "absolute",
              right: "25%",
            }}
          >
            {right}
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default Center;
