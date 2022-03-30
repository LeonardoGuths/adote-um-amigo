import React from "react"
import "../styles/footer.css"
import GatsbySVG from "../assets/gatsby.svg"
const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-text">
        <p>
          {new Date().getFullYear()} &copy; Todos os direitos reservAUdos. Feito
          com{" "}
        </p>
        <a href="https://www.gatsbyjs.com/">
          Gatsby <GatsbySVG />
        </a>
      </div>
    </footer>
  )
}

export default Footer
