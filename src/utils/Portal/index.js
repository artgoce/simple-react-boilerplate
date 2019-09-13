/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export const PurePortal = ({ children, node }) =>
  ReactDOM.createPortal(children, node || document.getElementById('portal'));

const Portal = ({ children, node }, ...rest) => (
  <PurePortal node={node}>
    <FocusTrap {...rest}>{children}</FocusTrap>
  </PurePortal>
);

PurePortal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  node: PropTypes.object,
};

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  node: PropTypes.object,
};

export default Portal;
