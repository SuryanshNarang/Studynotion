import React from "react";
import Logo from "../../assets/Logo/Logo-Small-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";

const Navbar = () => {
  const location = useLocation();

  // Function to match route
  const matchRoute = (route) => {
    return matchPath({ path: route, end: true }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" height={42} loading="lazy" />
        </Link>
        {/* Navlinks */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login, signup,dashboard */}
        {/* Understanding few things here as there is too much info now.
            User=>logged in hai ya nhi how to know? We need Data.
            so if token==null then not logged in (login button will appear and signup also)
            if token!=null then logged in (dashboard button will appear and profile also)
            if user!= instructor how many items in cart?
            we will use redux toolkit to manage statemanagement here.
        */}
        <div className="flex gap-x-4 items-center "></div>
      </div>
    </div>
  );
};

export default Navbar;