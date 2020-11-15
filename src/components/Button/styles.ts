import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles/index';

export const Container = styled(RectButton)`
  width: 320px;
  height: 60px;
  border-radius: 8px;

  padding: 0 20px;

  background-color: ${colors.blue};

  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 20px;
`;

export const VoiceIcon = styled.Image`
  width: 20px;
  height:20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

