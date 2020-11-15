import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles/index';

interface InputProps {
  isLoginButton: boolean;
}

export const Container = styled.View`
  
`;

export const BackgroundImage = styled.ImageBackground`
  width: 380px;
  height: 570px;
`;

export const ContainerButtons = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 40px;
`;

export const Button = styled(RectButton)<InputProps>`
  width: 320px;
  height: 52px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  background-color: ${colors.white};

  ${props => props.isLoginButton && css`
    background-color: ${colors.red};
  `}
`;

export const ButtonText = styled.Text<InputProps>`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};

  color: ${colors.black};

  ${props => props.isLoginButton && css`
    color: ${colors.white};
  `}
`;

