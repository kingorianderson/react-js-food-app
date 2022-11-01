import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiGithubLine,
  RiYoutubeLine,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={Logo} alt="LOGO" />
              <h5>Chakula Kitamu</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>08:00 - 21:00</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>11:00 - 18 :00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            {" "}
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Gakere Road, Nyeri Town</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0712333631</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: contact@kingori.co.ke</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <div className="sending">
                <IoSend className="send" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by King'ori Anderson. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/">
                  <RiFacebookFill />
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/kingorianderson">
                  <RiGithubLine />
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/">
                  <RiYoutubeLine />
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/">
                  <RiLinkedinFill />
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
