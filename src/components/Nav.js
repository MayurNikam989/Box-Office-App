import React from "react";
import { useLocation } from "react-router-dom";
import { NavList, LinkStyled } from "./Nav.styled";

const LINK = [
  { to: "/", page: "Home" },
  { to: "/starred", page: "Starred" },
];

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINK.map((item) => {
          return (
            <li key={item.to}>
              <LinkStyled
                to={item.to}
                className={item.to === location.pathname ? "active" : ""}
              >
                {item.page}
              </LinkStyled>
            </li>
          );
        })}
      </NavList>
    </div>
  );
};

export default Nav;
