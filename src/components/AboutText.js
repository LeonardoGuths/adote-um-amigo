import React from "react"
import ScrollMagic from "scrollmagic"
import { useEffect } from "react"
import "../styles/abouttext.css"
const AboutText = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    new ScrollMagic.Scene({
      duration: "200%",
      triggerElement: ".about-title",
      triggerHook: 0,
    })
      .setPin(".about-title")
      .addIndicators()
      .addTo(controller)
  })

  return (
    <div className="about" id="conhecer">
      <div className="about-title">
        <h2>Como a Adote um Amigo funciona?</h2>
      </div>
      <div className="about-paragraphs">
        <div className="about-paragraph">
          <h2>titulo 1</h2>
          <p>
            texto texto cachorros e gatos fofinhos texto texto cachorros e gatos
            fofinhos texto texto cachorros e gatos fofinhos texto texto
            cachorros e gatos fofinhos texto texto cachorros e gatos fofinhos
          </p>
        </div>
        <div className="about-paragraph">
          <h2>titulo 2</h2>
          <p>
            texto texto cachorros e gatos fofinhos texto texto cachorros e gatos
            fofinhos texto texto cachorros e gatos fofinhos texto texto
            cachorros e gatos fofinhos texto texto cachorros e gatos fofinhos
          </p>
        </div>
        <div className="about-paragraph">
          <h2>titulo 3</h2>
          <p>
            texto texto cachorros e gatos fofinhos texto texto cachorros e gatos
            fofinhos texto texto cachorros e gatos fofinhos texto texto
            cachorros e gatos fofinhos texto texto cachorros e gatos fofinhos
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutText
