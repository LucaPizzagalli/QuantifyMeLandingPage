import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="About" />
    <h1>About</h1>
    <p>Built by Luca Pizzagalli</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
