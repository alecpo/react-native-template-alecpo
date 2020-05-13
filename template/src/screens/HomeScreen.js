import React from 'react';
import styled from 'styled-components/native';

import Label from '#/components/Label';

import COLORS from '#/utils/colors';
import STRINGS from '#/utils/strings';
import TYPOGRAPHY from '#/utils/typography';

const HomeScreen = () => (
  <StyledContainer>
    <Label content={STRINGS.welcome} typography={TYPOGRAPHY.hugeLabelBold} />
  </StyledContainer>
);

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
`;

export default HomeScreen;
