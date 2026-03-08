import Center from "./src/Reused/Center";
import Nav from "./src/Reused/Nav";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <Nav />
      </div>
      <section className="my-5">
        <div className="container-xxl">
          <div className="row justify-content-between align-items-center gap-5 gap-md-0 ">
            <div className="col-md-2 text-uppercase fw-medium fs-6 text-center">
              Design Style
            </div>
            <div className="col-md-2 text-uppercase fw-medium fs-6 text-center">
              Modern Organic
            </div>
            <div className="col-md-4 position-relative">
              <div className="inside-map">
                <span className="fw-medium text-black"> Estepona, spain</span>
                <span>36°25′39″ N</span>
                <span>5°8′45″ N</span>
              </div>
              <svg
                data-v-828a0fa7=""
                data-v-e989b3b8=""
                id="map-svg"
                viewBox="0 0 403 326"
                fill="none"
              >
                <path
                  data-v-828a0fa7=""
                  d="M394.263 91.3121C400.222 84.2321 400.222 74.4881 401.544 65.9921C403.778 52.1441 385.324 50.6801 375.352 49.3841C361.199 47.2001 347.694 41.1761 333.397 44.2001C326.068 45.4481 318.571 48.5201 311.073 46.9601C301.269 44.2481 292.283 41.8721 283.536 37.3121C278.033 34.2161 270.752 34.1921 265.37 31.0961C261.405 28.5041 261.02 23.0561 257.368 19.8881C254.532 17.0561 249.799 16.2401 245.81 16.2881C240.331 16.3361 235.357 16.8401 229.71 15.2081C226.202 14.3441 223.246 13.6001 219.714 13.6001C213.466 13.5041 207.411 16.1681 201.163 15.9041C194.675 15.7361 187.995 11.1041 181.027 10.2161C173.506 9.06413 166.633 13.0961 159.304 13.6961C153.994 14.2001 148.539 12.4721 142.676 10.7441C133.209 8.51213 124.654 4.96013 115.739 1.76813C107.569 -0.799868 99.6396 3.61613 91.8301 5.36813C84.5972 6.61613 77.1482 8.63213 69.8432 7.72013C65.9505 7.04813 62.7306 4.38413 59.0541 3.06413C53.215 1.07213 46.0302 3.49613 40.3353 5.44013C37.0432 6.68813 34.6884 8.53613 33.2226 10.8641C31.2282 14.6561 28.8012 18.2801 23.9953 17.9201C20.6553 17.9201 17.0989 17.2961 13.7348 17.6081C2.68135 18.2561 -1.69199 27.9281 3.59446 37.2881C5.90127 42.5201 7.82362 45.8081 11.3319 48.9521C12.7977 50.3921 14.2394 51.8561 15.0324 53.8481C16.7385 57.5681 14.6239 63.7121 16.5943 66.9761C18.2043 69.3761 21.4002 69.3281 23.9473 70.3121C29.498 71.5361 31.6847 77.0801 35.9619 80.0801C39.7105 82.4561 45.3814 80.5361 51.0283 79.8641C53.9599 79.5041 56.9395 79.4561 59.8951 79.1921C67.2241 78.7601 73.8802 74.5841 81.2572 74.8961C88.1055 75.0401 90.8208 80.7281 92.2386 86.3441C93.3199 90.2801 94.6175 94.1921 94.1128 97.3601C93.5602 101.632 89.2109 104.944 86.1591 107.944C80.7045 113.176 76.9559 119.824 76.7877 126.832C76.4994 132.256 78.1334 137.848 78.0132 143.248C77.845 148.288 74.9855 152.608 73.9042 156.976C72.5826 161.104 72.8469 166.432 69.8432 169.768C64.9653 175.888 49.995 173.224 55.666 184.552C58.6216 191.152 65.2056 196.168 66.7675 203.392C69.0503 211.48 62.5624 220.504 61.5291 228.76C61.1446 233.872 67.4643 235.6 67.7046 240.472C67.8728 245.872 60.5199 253.456 58.3572 259.552C55.666 266.152 55.0412 275.752 60.8323 280.672C64.3165 283.6 69.4828 284.608 73.5678 286.768C82.8191 291.04 85.9669 300.52 90.941 309.016C94.7857 314.944 100.048 320.584 106.392 323.704C117.782 329.488 125.856 319 135.347 314.968C137.846 313.984 140.489 313.408 143.036 312.544C149.717 310.6 153.97 304.264 159.977 301.408C172.064 295.384 185.232 299.464 197.967 300.688C202.677 301 207.579 301.24 212.193 300.448C217.071 299.728 221.036 296.56 225.841 296.248C230.071 295.984 234.54 299.008 238.385 297.088C241.364 295.504 242.95 292.168 244.801 289.384C251.264 278.992 264.625 275.92 274.669 270.28C279.643 267.64 282.262 262.624 283.584 257.32C285.626 250.336 288.99 243.904 291.562 237.256C292.835 234.184 294.253 231.112 296.584 228.688C299.756 225.208 305.475 223.192 308.238 219.496C317.778 202.216 277.216 197.8 309.007 160.12C315.014 154.024 320.084 146.728 325.827 140.848C329.48 137.632 334.094 134.824 336.016 129.76C337.77 125.536 339.356 120.808 343.489 118.312C349.761 114.328 358.171 114.568 365.332 113.08C377.418 110.752 385.732 100.12 394.023 91.6721"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </div>
            <div className="col-md-2 text-uppercase fw-medium fs-6 text-center">
              In progress Mixed Use
            </div>
            <div className="col-md-2 text-uppercase fw-medium fs-6 text-center">
              297,945 ft2
            </div>
          </div>
        </div>
      </section>
      <section className="project-big-image"></section>
      <section className="py-60">
        <div className="container-fluid">
          <div className="row align-items-center gap-3 gap-md-0">
            <div className="col-md-8 col-12">
              <img
                src="https://cdn.yodezeen.com/APR_web_f4d8d78d3a.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="text-black fs-6 fw-light mb-0 text-wrap col-md-3 col-12">
              The Residential Complex project in Estepona won the Global Future
              Design Awards in 2024
            </div>
          </div>
        </div>
      </section>
      <section>
        <video
          className="project-video"
          src="https://cdn.yodezeen.com/2741_estepona_28072024_1_e_EGJ_9hq_A_e89ac779f8.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>
      <section className="container py-60">
        <div className="py-60">
          <p className="fs-6 text-uppercase text-center fw-medium">concept</p>
          <h3
            className="about-content text-center text-black "
            style={{ fontSize: "60px" }}
          >
            This Residential Complex project is designed to be a haven for
            modern families, combining chic aesthetics, thoughtful planning, and
            contemporary functionality.
          </h3>
          <p className="fs-6 text-uppercase text-center fw-bold ">
            Our aim is to provide residents with a unique space that caters to
            their needs and fosters a sense of belonging and comfort.
          </p>
        </div>
      </section>
      <section className="project-image"></section>
      <section className="py-60 d-flex justify-content-end align-content-center container">
        <div className="w-50 py-60">
          <h4
            className="about-content fs-1 text-black"
            style={{ letterSpacing: "1px" }}
          >
            General plan
          </h4>
          <p className="fs-6 fw-light text-black text-capitalize">
            The building features four residential floors with a total of 40
            apartments, including 3-bedroom units and spacious 4-bedroom end
            apartments. The fourth floor features ten apartments with unique
            layouts, rooftop access with amenities, personal elevators
            connecting to the underground garage and ground floor.
          </p>
        </div>
      </section>
      <section
        className="project-image"
        style={{
          backgroundImage: `url(${"https://cdn.yodezeen.com/extra_UPLOA_Djpg_02_2a37d3deb3.webp"})`,
        }}
      ></section>

      <Center left={"let's"} center={"about your project!"} right={"talk"} />
      <div
        className="project-image "
        style={{
          backgroundImage: `url(${"https://cdn.yodezeen.com/extra_2025_04_29_V1_P8_0d6d3d7f3c.webp"})`,
          height: "57vh",
          backgroundPosition: "top",
        }}
      ></div>
    </>
  );
};

export default Project;
