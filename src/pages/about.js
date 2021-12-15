// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Me"}>
        <p>Hi there. I am proud creator of this site, which I built with Gatshy.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage