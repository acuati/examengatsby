import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const Contacto = () => (
  <Layout>
      <nav>
      <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
    <h1>Bienvenid@ a la página de contacto</h1>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contacto" />

export default Contacto
