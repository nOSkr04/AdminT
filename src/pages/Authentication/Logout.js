import React, { useEffect } from "react"
import PropTypes from "prop-types"
import withRouter from "components/Common/withRouter"

const Logout = () => {
  useEffect(() => {
    // dispatch(logoutUser(history))
  }, [])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Logout)
