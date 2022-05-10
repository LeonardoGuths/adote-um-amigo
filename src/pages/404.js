import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/404.css"

const Error = () => {
  return (
    <Layout>
      <div className="error-page">
        <div className="error-text">
          <h2>Ops... Parece que não encontramos a página que você queria :(</h2>
        </div>
        <div className="error-image">
          <StaticImage
            src="../assets/images/catsndogs1.png"
            alt="cats and dogs"
            placeholder="blurred"
            layout="constrained"
            className="images1"
            id="catsndogs1"
            width={1920}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Error
