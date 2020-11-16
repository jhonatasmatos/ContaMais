import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { colors, fonts } from '../../styles/index';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  margin-top: 90px;
  
  background-color: ${colors.white};
`;

export const GoBackButton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.black};

  padding: 20px 20px 0;
`;

export const TitleReminder = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.big};
  color: ${colors.black};

  width: 320px;

  margin-top: 14px;
  padding-left: 20px;
`;

export const ContainerReminder = styled.View`
  width: 320px;
  height: 54px;
  border-radius: 8px;

  margin: 12px 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  background-color: ${colors.blue};
`;

export const ReminderName = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const ReminderDate = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const VoiceButton = styled(RectButton)`
  width: 54px;
  height: 54px;
  border-radius:28px;

  background-color: ${colors.white};

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 18px;
  bottom: 50px;

  z-index: 1;
`;

export const ContainerSpeak = styled.TouchableOpacity`
  width: 100%;
  height: 60px;

  background-color: ${colors.red};

  justify-content: center;
  align-items: center;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  position: absolute;
  bottom: 0px;
`;

export const TextLiveSpeak = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};
`;

export const TitleHelp = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.bigger};
  color: ${colors.white};

  margin-top: 70px;
  margin-left: 42px;
`;

export const TextHelp = styled.Text`
  width: 210px;

  margin-left: 42px;

  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const ButtonCloseTip = styled(RectButton)`
  width: 136px;
  height: 32px;
  border-radius: 4px;

  margin-left: 42px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
`;

export const ButtonTextTip = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};
`;

