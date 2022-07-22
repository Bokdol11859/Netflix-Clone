import React from "react";

const Nav = () => {
  return (
    <nav className={`nav`}>
      <img
        alt="Netflix logo"
        className="Nav__logo"
        onClick={() => {
          window.location.reload();
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      />
      <img
        alt="user logged"
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </nav>
  );
};

export default Nav;
