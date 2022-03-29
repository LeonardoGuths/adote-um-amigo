import React from "react"
import "../styles/header.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="page-header">
      <Link to="/" className="logo">
        Adote um amigo
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active-link">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active-link">
            Contato
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
