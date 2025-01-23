import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, auth = false }) => {
const isLoggedIn = localStorage.getItem('user:token') !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />;
  } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
    console.log('object :>> ');
    return <Navigate to={'/'} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.bool,
};

export default ProtectedRoute;
