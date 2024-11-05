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
  export default ErrorNotification