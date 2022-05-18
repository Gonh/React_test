import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Login_button";
import LogoutButton from "./Logout_button";
import Profile from "./perfil";

export default function Navbar() {
const {isAuthenticated} = useAuth0();

  return (
    <header className="root__header">
      <ul className="nav-links">
        <span>Testing de React</span>
        <li>
          <Link className="link" to="/">
            Todo page
          </Link>
        </li>
        <li>
          <Link className="link" to="/Api">
            Api
          </Link>
        </li>
        <li>
          <Link className="link" to="/Form">
            Prueba Form
          </Link>
        </li>
        {isAuthenticated == true ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </ul>
    </header>
  );
}
