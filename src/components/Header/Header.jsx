import { useRef } from "react";
import { Container } from "reactstrap";
import Logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { RiShoppingCartLine, RiUserLine, RiMenuLine } from "react-icons/ri";
import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt="LOGO" />
            <h5>Chakula Kitamu</h5>
          </div>

          {/********** Menu **********/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/********** Nav right icons *********/}
          <div className="nav__right d-flex align-item-center gap-4">
            <span className="cart__icon">
              <RiShoppingCartLine />
              <span className="cart__badge">3</span>
            </span>

            <span className="user">
              <Link to="/login">
                <RiUserLine />
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <RiMenuLine />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
