import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/Button"
import { useEffect } from "react"
import AboutText from "../components/AboutText"

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let value = window.scrollY
      document.getElementById("catsndogs2").style.left = value * 0.75 + "px"
      document.getElementById("catsndogs3").style.left = value * -0.75 + "px"
      document.getElementById("welcome_title").style.marginTop =
        value * 0.3 + "px"
      document.getElementById("middle_button").style.marginTop =
        value * 0.45 + "px"
      document.querySelector("header").style.marginTop = value * 0.75 + "px"
    })
  })
  return (
    <Layout>
      <div className="home-page">
        <section className="start-section">
          <div className="welcome-text">
            <h1 id="welcome_title">Adote um Amigo</h1>
            <p id="welcome_text">
              Bem-vindo! Que bom ter você por aqui! Esta página foi criada com o
              intuito de facilitar o encontro de nossos amados pets com seus
              futuros tutores!
            </p>
          </div>
          <StaticImage
            src="../assets/images/catsndogs2.png"
            alt="cats and dogs"
            placeholder="blurred"
            layout="constrained"
            className="images2"
            id="catsndogs2"
            width={1080}
          />
          <StaticImage
            src="../assets/images/catsndogs3.png"
            alt="cats and dogs"
            placeholder="blurred"
            layout="constrained"
            className="images3"
            id="catsndogs3"
            width={1080}
          />
          <Button
            className="middle-button"
            href="#conhecer"
            id="middle_button"
            text="Conhecer"
          />
        </section>
        <AboutText />
      </div>
    </Layout>
  )
}
