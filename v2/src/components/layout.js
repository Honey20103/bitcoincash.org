/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header/header"
import "./layout.scss"
import "../global/global.scss";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
        <Footer>
        </Footer>
    </>
  )
}

export default Layout
