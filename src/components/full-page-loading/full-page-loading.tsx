import './full-page-loading.css';

function FullPageLoading(): JSX.Element {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Loading six-cities...</p>
    </div>
  );
}

export default FullPageLoading;
