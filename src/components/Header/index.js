import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

// Importing the stylesheet
import './index.css'

// Header component
const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
            aria-label="Open Navigation Menu"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              aria-label="Close Menu"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => close()}
                  aria-label="Go to Home"
                >
                  <AiFillHome size="36" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => close()}
                  aria-label="Go to About"
                >
                  <BsInfoCircleFill size="32" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
