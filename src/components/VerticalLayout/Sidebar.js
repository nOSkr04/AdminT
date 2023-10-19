import PropTypes from "prop-types"
import React from "react"
import withRouter from "components/Common/withRouter"

//i18n
import SidebarContent from "./SidebarContent"

import { Link } from "react-router-dom"

const Sidebar = props => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={require("../../assets/logos.png")} alt="" height="40" />
            </span>
            <span className="logo-lg">
              <img src={require("../../assets/logos.png")} alt="" height="40" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

export default withRouter(Sidebar)
