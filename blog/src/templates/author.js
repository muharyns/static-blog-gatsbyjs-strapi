import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.programs.map(program => (
          <li key={program.id}>
            <h2>
              <Link to={`/Program_${program.id}`}>{program.title}</Link>
            </h2>
            <p>{program.content}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      programs {
        id
        title
        content
      }
    }
  }
` 