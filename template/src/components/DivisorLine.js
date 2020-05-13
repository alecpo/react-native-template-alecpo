import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import COLORS from '#/utils/colors';

const DivisorLine = ({ marginVertical, thickness, color }) => (
  <StyledDivisorLine
    marginVertical={marginVertical}
    thickness={thickness}
    color={color}
  />
);

const StyledDivisorLine = styled.View`
  height: ${({ thickness }) => thickness}px;
  margin-vertical: ${({ marginVertical }) => marginVertical}px;
  background-color: ${({ color }) => color};
`;

DivisorLine.defaultProps = {
  marginVertical: 0,
  color: COLORS.defaultGray,
  thickness: 1
};

DivisorLine.propTypes = {
  marginVertical: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number
};

export default DivisorLine;
