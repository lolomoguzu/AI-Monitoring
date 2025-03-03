import { Link } from "react-router-dom";
const ErrorElement = () => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>

      <Link to="/Dashboard">Go back to the Homepage</Link>
    </div>
  );
};

export default ErrorElement;
