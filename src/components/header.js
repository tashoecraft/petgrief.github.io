import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
<header
    style={{
      background: `FloralWhite`,
      marginBottom: `1.45rem`,
      borderBottomRightRadius: '20px',
      borderBottomLeftRadius: '20px',
    }}
  >
  <nav style={{display: 'flex', flexDirection: 'column'}} role="navigation" aria-label="main navigation">
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
      <Link
          className="navbar-item"
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              height: '182px',
              width: '273px'
            }}
          >
                      <Image />
          </Link>
            <h1 style={{color:'black', fontSize: '3vw'}}>
              Heart of Texas Pet Loss & Grief Support
              </h1>
      </div>
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/links/">Who We Are</Link>
          <Link className="navbar-item" to="/memorial/">Pet Memorial</Link>
          <Link className="navbar-item" to="/contact/">Contact</Link>
      </div>
    </div>
  </nav>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
