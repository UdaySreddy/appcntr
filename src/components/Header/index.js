import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headContainer">
    <div className="logoBox">
      <img
        className="logoImage"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <ul className="sectionsList">
      <li>
        <Link className="sectionName" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="sectionName" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="sectionName" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
