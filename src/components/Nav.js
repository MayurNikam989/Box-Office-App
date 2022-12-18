import React from "react";
import { Link } from "react-router-dom";

const LINK = [
  { to: "/", page: "Home" },
  { to: "/starred", page: "Starred" },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINK.map((item) => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.page}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
