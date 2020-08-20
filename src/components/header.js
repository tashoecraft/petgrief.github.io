import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `FloralWhite`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
            <p>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
                    <Image />
        </Link>
        </p>
        {window.matchMedia("(min-width: 700px)") &&

<h1 style={{color: 'black', fontSize:"4vw"}}>
Heart of Texas Pet Loss & Grief Support</h1>
        }
    </div>
    <div 
      style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/links/">Who We Are</Link></div>
        <div><Link to="/memorial/">Pet Memorial</Link></div>
        <div><Link to="/contact/">Contact</Link></div>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
