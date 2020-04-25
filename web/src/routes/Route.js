import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

export default function RouteWrapper({ component, isPrivate, ...rest }) {
  const { isSigned } = store.getState().auth;

  if (!isSigned && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isSigned && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
