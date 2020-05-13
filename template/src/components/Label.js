import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { MaskService } from 'react-native-masked-text';

import COLORS from '../utils/colors';
import TYPOGRAPHY from '../utils/typography';
import typographyPropType from '#/utils/customPropTypes/typographyPropType';
import maskPropType from '#/utils/customPropTypes/maskPropType';

const Label = props => {
  const {
    content,
    typography,
    textAlign,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    color,
    mask
  } = props;

  return (
    <StyledText
      {...props}
      typography={typography}
      textAlign={textAlign}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
    >
      {mask
        ? MaskService.toMask(mask.type, content ?? '', mask.settings)
        : content}
    </StyledText>
  );
};

const StyledText = styled.Text`
  font-size: ${({ typography: { size } }) => size};
  font-weight: ${({ typography: { weight } }) => weight};
  text-align: ${({ textAlign }) => textAlign};
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  color: ${({ color }) => color};
`;

Label.defaultProps = {
  color: COLORS.darkGray,
  textAlign: 'left',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  typography: TYPOGRAPHY.defaultLabelBold,
  mask: undefined
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  typography: typographyPropType,
  mask: maskPropType
};

export default Label;
