const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-50 mx-auto">
          <p className="text-black">
            Please, be informed, that the intellectual property rights to all
            the photos, designs and other materials on this Site belong to
            "YODEZEEN GROUP" LLC. You may request permission to use them by
            contacting us at: privacy@yodezeen.com
          </p>
        </div>

        <div className="d-flex gap-2 justify-content-center my-3">
          <button className="bg-black rounded-circle">
            <i className="bi bi-instagram text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-youtube text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-facebook text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-linkedin text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-twitter-x text-white"></i>
          </button>
          <button className="bg-black rounded-circle">
            <i className="bi bi-pinterest text-white"></i>
          </button>
        </div>
        <div className="d-flex justify-content-between align-content-center flex-md-row flex-column">
          <p className="m-0">© 2026 YODEZEEN. All rights reserved.</p>
          <span>
            <ul className="d-flex  gap-2 list-unstyled flex-md-row flex-column ">
              <li className="text-uppercase fw-medium text-black">
                privacy policy
              </li>
              <li className="text-uppercase fw-medium text-black">
                terms of use
              </li>
              <li className="text-uppercase fw-medium text-black">
                accessibility statement
              </li>
              <li className="text-uppercase fs-6 text-black">contact us</li>
            </ul>
          </span>
          <p className="m-0">Made by The First The Last</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
