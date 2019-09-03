import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ProgramTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProgram.title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiProgram.author.id}`}>{data.strapiProgram.author.username}</Link></p>
    {/* <Img fixed={data.strapiProgram.image.childImageSharp.fixed}/> */}
    <Img fluid={data.strapiProgram.image.childImageSharp.fluid} />
    <p>{data.strapiProgram.content}</p>
  </Layout>
)

export default ProgramTemplate

export const query = graphql`
  query ProgramTemplate($id: String!) {
    strapiProgram(id: {eq: $id}) {
      title
      content
      image {
        childImageSharp {
            fluid(maxWidth: 950) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      author {
        id
        username
      }
    }
  }
`