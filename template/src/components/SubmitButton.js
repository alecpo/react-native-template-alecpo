import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Label from '#/components/Label';

import COLORS from '#/utils/colors';
import SPACING from '#/utils/spacing';
import TYPOGRAPHY from '#/utils/typography';
import typographyPropType from '#/utils/customPropTypes/typographyPropType';

const SubmitButton = ({
  title,
  labelColor,
  backgroundColor,
  submit,
  disabled,
  leftIcon,
  rightIcon,
  marginVertical,
  hasBorder,
  borderColor,
  typographyLabel,
  testID
}) => (
  <StyledButton
    onPress={submit}
    hasBorder={hasBorder}
    borderColor={borderColor}
    marginVertical={marginVertical}
    backgroundColor={backgroundColor}
    disabled={disabled}
    testID={testID}
  >
    {leftIcon()}
    <Label
      typography={typographyLabel}
      content={title}
      color={labelColor}
      marginLeft={leftIcon() ? SPACING.small : 0}
      marginRight={rightIcon() ? SPACING.small : 0}
    />
    {rightIcon()}
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  border-width: ${({ hasBorder }) => (hasBorder ? 1 : 0)}px;
  border-color: ${({ borderColor }) => borderColor};
  margin-vertical: ${({ marginVertical }) => marginVertical}px;
  padding-vertical: ${SPACING.small}px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? COLORS.defaultGray : backgroundColor};
`;

SubmitButton.defaultProps = {
  disabled: false,
  hasBorder: false,
  rightIcon: () => {},
  leftIcon: () => {},
  submit: () => {},
  borderColor: COLORS.secondary,
  labelColor: COLORS.secondary,
  backgroundColor: COLORS.loginButton,
  marginVertical: 0,
  typographyLabel: TYPOGRAPHY.regularLabelBold,
  testID: ''
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  submit: PropTypes.func,
  rightIcon: PropTypes.func,
  leftIcon: PropTypes.func,
  title: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginVertical: PropTypes.number,
  typographyLabel: typographyPropType,
  testID: PropTypes.string
};

export default SubmitButton;
