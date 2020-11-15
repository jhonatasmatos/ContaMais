import styled from 'styled-components/native';

import { colors, fonts } from '../../styles/index';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;

  padding-top: 25px;
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;

  padding: 0 20px;

  flex-direction: row;
  align-items: center;

  background-color: ${colors.blue};
`;

export const AvatarContainer = styled.View`
  width: 66px;
  height: 66px;
  border-radius: 33px;

  background-color: ${colors.white};
`;

export const Avatar = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
`;

export const ContainerText = styled.View`
  flex: 1;
  height: 90px;

  justify-content: center;

  padding-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.big};
  color: ${colors.black};
`;

export const EditProfile = styled.TouchableOpacity`
  width: 100px;
  height: 26px;
`;

export const EditProfileText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};
`;

export const SettingsButton = styled.TouchableOpacity`
  width: 18px;
  height: 18px;

  margin-bottom: 26px;
`;

export const ContainerAmount = styled.View`
  width: 100%;
  height: 100px;

  padding: 14px 26px 12px 26px;

  border-bottom-width: 1px;
`;

export const AmountText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};
`;

export const ContentAmount = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Amount = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.megabig};
  color: ${colors.blue};
`;

export const SectionText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.regular};
  color: ${colors.black};

  padding-top: 20px;
  padding-left: 20px;
`;

export const ContainerSpeak = styled.TouchableOpacity`
  width: 100%;
  height: 60px;

  background-color: ${colors.red};

  justify-content: center;
  align-items: center;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Icon = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};

  line-height: 12px;

  padding-top: 10px;
`;

export const TextLiveSpeak = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};
`;
