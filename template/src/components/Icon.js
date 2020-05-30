import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';

import { MI, MCI, I, SLI } from '#/utils/enums/ICON_FAMILY';

const renderIcon = (iconName, size, color, iconFamily) => {
  switch (iconFamily) {
    case MI:
      return <IconMI name={iconName} size={size} color={color} />;
    case MCI:
      return <IconMCI name={iconName} size={size} color={color} />;
    case I:
      return <IconI name={iconName} size={size} color={color} />;
    case SLI:
      return <IconSLI name={iconName} size={size} color={color} />;
    default:
      return <IconFA name={iconName} size={size} color={color} />;
  }
};

const Icon = ({
  iconName,
  size,
  color,
  iconFamily,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom
}) => (
  <StyledContainer
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginBottom={marginBottom}
  >
    {renderIcon(iconName, size, color, iconFamily)}
  </StyledContainer>
);

const StyledContainer = styled.View`
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

Icon.defaultProps = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconFamily: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number
}.isRequired;

export default Icon;
