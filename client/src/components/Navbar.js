import React from "react";
import styled from "styled-components";
import PinkButton from "./PinkButton";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { switchPage } from "../redux/actions/activePageActions";
const Navbar = ({ showLinks, setShowLinks }) => {
  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleClick = () => {
    window.open(
      // "https://www.paypal.com/donate/?hosted_button_id=4QPQZUHK995GU"
      "https://www.paypal.com/donate/?hosted_button_id=452BWYVNBNL3J"
    );
  };

  const dispatch = useDispatch();
  const switchPages = (page) => {
    dispatch(switchPage(page));
    setShowLinks(false);
  };
  const { page } = useSelector((state) => state.page);
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo onClick={() => switchPages("home")} src={logo} />
      </Link>
      <HamburgerIcon onClick={handleToggleLinks}>
        {showLinks ? (
          <IoClose style={{ color: "rgba(237,30,117)" }} size={26} />
        ) : (
          <FaBars style={{ color: "rgba(237,30,117)" }} size={26} />
        )}
      </HamburgerIcon>
      <Right>
        <NavLinksContainer show={showLinks}>
          <Link to="/about">
            <NavLink
              active={page === "about"}
              onClick={() => switchPages("about")}
            >
              About Us
            </NavLink>
          </Link>
          {/* <Link to="/events">
            <NavLink
              active={page === "events"}
              onClick={() => switchPages("events")}
            >
              Events
            </NavLink>
          </Link> */}
          <Link to="/contact">
            <NavLink
              active={page === "contact"}
              onClick={() => switchPages("contact")}
            >
              Reach out
            </NavLink>
          </Link>
        </NavLinksContainer>
        <ButtonWrapper>
          <PinkButton title="Donate" onClick={handleClick} />
        </ButtonWrapper>
      </Right>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  transition: all 0.8s ease;
`;
const Right = styled.div`
  display: flex;
`;

const Logo = styled.img`
  object-fit: cover;
  height: 70px;
`;
const ButtonWrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const HamburgerIcon = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
  }
`;
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
  @media screen and (max-width: 800px) {
    display: ${(props) => (props.show === true ? "flex" : "none")};
    position: absolute;
    top: 5.5rem;
    right: 2rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    width: fit-content;
    margin-right: 0px;
    z-index: 20000;
    padding: 5px 50px;
  }
`;

const NavLink = styled.div`
  margin: 0 1rem;
  cursor: pointer;
  color: #333333;
  position: relative;
  transition: all 0.8s linear;
  &::after {
    content: "";
    position: absolute;
    height: 4px;
    bottom: -3px;
    left: 0px;
    right: 0px;
    background: rgb(237, 30, 117);
    border-radius: 2px;
    display: ${(props) => (props.active ? "block" : "none")};
  }

  font-size: 18px;
  &:hover {
    color: rgb(237, 30, 117);
    &::after {
      display: block;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 0.6rem 0;
  }
`;

export default Navbar;
