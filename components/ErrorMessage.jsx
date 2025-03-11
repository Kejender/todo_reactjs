import PropTypes from 'prop-types'

const ErrorNotification = ({ errorMessage }) => {

  if (errorMessage === null) {
    return null
  }
  return (
    <div className="error">
      <h3>{errorMessage}</h3>
    </div>
  )
}

ErrorNotification.displayName = 'Error'

ErrorNotification.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default ErrorNotification