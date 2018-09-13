import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
      {/* <!-- Links --> */}
      <div className="section-seperator">
          <div className="content-md container">
              <div className="row">
                  <div className="col-sm-2 sm-margin-b-30">
                      {/* <!-- List --> */}
                      <ul className="list-unstyled footer-list">
                          <li className="footer-list-item"><a href="#body">Home</a></li>
                          <li className="footer-list-item"><a href="#about">Team</a></li>
                          <li className="footer-list-item"><a href="#work">Credentials</a></li>
                          <li className="footer-list-item"><a href="#contact">Contact</a></li>
                      </ul>
                      {/* <!-- End List --> */}
                  </div>
                  <div className="col-sm-2 sm-margin-b-30">
                      {/* <!-- List --> */}
                      <ul className="list-unstyled footer-list">
                          <li className="footer-list-item"><a href="#">Twitter</a></li>
                          <li className="footer-list-item"><a href="#">Facebook</a></li>
                          <li className="footer-list-item"><a href="#">Instagram</a></li>
                          <li className="footer-list-item"><a href="#">YouTube</a></li>
                      </ul>
                      {/* <!-- End List --> */}
                  </div>
                  <div className="col-sm-3">
                      {/* <!-- List --> */}
                      <ul className="list-unstyled footer-list">
                          <li className="footer-list-item"><a href="#">Subscribe to Our Newsletter</a></li>
                          <li className="footer-list-item"><a href="#">Privacy Policy</a></li>
                          <li className="footer-list-item"><a href="#">Terms &amp; Conditions</a></li>
                      </ul>
                      {/* <!-- End List --> */}
                  </div>
              </div>
              {/* <!--// end row --> */}
          </div>
      </div>
      {/* <!-- End Links --> */}

      {/* <!-- Copyright --> */}
      <div className="content container">
          <div className="row">
              <div className="col-xs-6">
                  <img className="footer-logo" src="img/logo-dark.png" alt="flameonepage Logo" />
              </div>
              <div className="col-xs-6 text-right">
                  <p className="margin-b-0"><a className="fweight-700" href="#">FlameOnePage</a> Theme Powered by: <a className="fweight-700" href="http://ft-seo.ch/">FairTech Studio</a></p>
              </div>
          </div>
          {/* <!--// end row --> */}
      </div>
      {/* <!-- End Copyright --> */}
  </footer>
    );
  }
}

export default Footer;
