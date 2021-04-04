import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Header from "../components/Header"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1rem 1.45rem`,
        }}>
        
        
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">About</Link>
      </main>
    </Layout>
  );
}

export default IndexPage
