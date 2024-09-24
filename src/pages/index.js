import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from "../components/index.module.css"
import Card from "../components/card/card"


const IndexPage = ({data}) => (
  <Layout>
    <nav>
      <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
    <h1>Bienvenid@ a la página de inicio</h1>
    
    <div className='contenedor-card'>
    <div>
      {data.allTecnologiasJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          <div key={node.id}>
            
            <h2>{node.title}</h2>
            <GatsbyImage image={image} alt={node.title} />
            <p>{node.description}</p>
            <button><a href={node.link}>Leer más</a></button>
          </div>
        );
      })}
    </div>


    </div>
   
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const query = graphql
`
query MyQuery {
  allTecnologiasJson {
    edges {
      node {
        id
        link
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: WEBP
              height: 100
              width: 210
              aspectRatio: 1.77
            )
          }
        }
        description
      }
    }
  }
}

`
export const Head = () => <Seo title="Inicio" />

export default IndexPage
