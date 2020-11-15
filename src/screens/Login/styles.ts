import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles/index';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;

  background-color: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;

  flex-direction: row;
  align-items: center;
  padding-top: 20px;

  background-color: ${colors.white};
`;

export const TextHeader = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};

  padding-left: 90px;

  color: ${colors.black};
`;

export const Label = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};

  padding-top: 20px;

  color: ${colors.black};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 54px;
  font-family: 'Poppins-Regular';
  font-size: ${fonts.bigger};

  color: ${colors.blue};
`;

export const ContainerButton = styled.View`
  flex: 1;
  height: 52px;

  align-items: center;
  justify-content: flex-end;

  bottom: 50px;
`;

export const Button = styled(RectButton)`
  width: 320px;
  height: 52px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.red};
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};

  color: ${colors.white};
`;
