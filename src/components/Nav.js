import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`search?q=${e.target.value}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => {
          navigate("/");
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      />

      <input
        className="nav__input"
        value={searchValue}
        onChange={handleChange}
        placeholder="제목, 사람, 장르"
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
