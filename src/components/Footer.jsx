import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ width: "100%", background: "#0D1043", padding: "3rem 0" }}>
      <Container className="text-center text-light">
        <Row className="g-3">
          <div className="col-6 col-lg-3 privacyLink ">
            <Link onClick={() => window.scroll(0, 0)} to="/privacy">
              Privacy Policy
            </Link>
            <Link onClick={() => window.scroll(0, 0)} to="/tc">
              Terms & Conditions
            </Link>
            <Link onClick={() => window.scroll(0, 0)} to="/rummy-legal">
              Legal
            </Link>
            <Link onClick={() => window.scroll(0, 0)} to="/disclaimer">
              Disclaimer
            </Link>
          </div>
          <div className="col-6 col-lg-3 privacyLink">
            <Link onClick={() => window.scroll(0, 0)} to="/rummy-rules">
              Rummy Rules
            </Link>
            <Link onClick={() => window.scroll(0, 0)} to="/rummy-tips">
              Rummy Tips
            </Link>
            <Link onClick={() => window.scroll(0, 0)} to="/rummy-faq">
              FAQ
            </Link>
          </div>

          <div className="col-6 col-lg-3">
            <h5>CONTACT US</h5>
            <a href="mailto:support@playpenny.in" style={{ color: "#ffff" }}>
              support@playpenny.in
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <h5>FOLLOW US</h5>
            <div className="row g-2">
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
              <div className="col-3">
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png"
                  alt=""
                  className="w-50"
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
