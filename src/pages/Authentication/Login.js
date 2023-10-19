import PropTypes from "prop-types"
import React from "react"
import withRouter from "components/Common/withRouter"

const Login = props => {
  //meta title
  document.title = "Login | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5"></div>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
