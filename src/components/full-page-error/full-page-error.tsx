import './full-page-error.css';

function FullPageError(): JSX.Element {
  return (
    <div className="error-wrapper">
      <div className="city-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1>We can’t load offers right now</h1>
      <p className="error-text">
        Something went wrong and six-cities is currently unavailable.
        Please try again a little later.
      </p>
    </div>
  );
}

export default FullPageError;
