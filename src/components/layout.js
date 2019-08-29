import React from "react"
import Header from "../components/header"
import Main from "../components/main"
import '../pages/fonts.css';

export default ({ children }) => (
  <div style={{ margin: `0 auto`, width: `100%`, padding: `0` }}>
    <Header />
    <Main>
    {children}
    </Main>
  </div>
)