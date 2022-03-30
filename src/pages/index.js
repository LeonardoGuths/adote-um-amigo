import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/Button"
export default function Home() {
  return (
    <Layout>
      <div className="home-page">
        <section className="start-section">
          <div className="welcome-text">
            <h1>Adote um Amigo</h1>
            <p>
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
      </div>
    </Layout>
  )
}
