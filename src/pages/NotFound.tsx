import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const NotFound = () => {
	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page not found
        </p>
        <Link to="/">Go home</Link>
      </header>
    </div>
  );
};

export default NotFound;