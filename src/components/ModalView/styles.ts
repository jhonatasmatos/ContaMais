import styled from 'styled-components/native';

import { colors, fonts } from '../../styles/index';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  margin-top: 90px;
  
  background-color: ${colors.white};
`;

export const ModalContent = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${colors.black};
`;

export const GoBackButton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.regular};
  color: ${colors.black};

  padding: 20px 20px 0;
`;

export const TitleWaitRoom = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.big};
  color: ${colors.black};

  width: 320px;

  margin-top: 14px;
  padding-left: 20px;
`;

export const TipsText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.black};

  width: 320px;

  padding-top: 5px;
  padding-left: 20px;
`;

export const ContainerLoading = styled.View`
  width: 320px;
  height: 122px;
  border-radius: 4px;

  align-items: center;

  margin-top: 24px;
  margin-left: 20px;

  background-color: ${colors.blue};
`;

export const Loading = styled.View`
  width: 300px;
  height: 34px;
  border-radius: 4px;

  margin: 10px;

  background-color: ${colors.darkBlue};
`;

export const LoadingInternal = styled.View`
  width: 176px;
  height: 20px;
  border-radius: 4px;

  margin: 6px;
  padding: 2px 4px;

  align-items: flex-end;

  background-color: ${colors.white};
`;

export const ContainerEstimatedTime = styled.View`
  width: 300px;

  padding-top: 10px;
  padding-left: 8px;

  flex-direction: row;
`;

export const EstimatedTimeText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.small};
  color: ${colors.white};

  width: 216px;
`;

export const EstimatedTime = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.small};
  color: ${colors.white};
`;

export const ContainerNews = styled.View`
  width: 320px;
  height: 134px;

  margin: 10px 20px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${colors.lighter};
`;

export const BankImage = styled.View`
  width: 134px;
  height: 100px;
  border-radius: 4px;

  background-color: ${colors.white};
`;

export const ContainerTextNews = styled.View`
  width: 140px;
  height: 100px;
`;

export const TextNews = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${fonts.small};
  color: ${colors.blue};
`;

export const ReadingLink = styled.TouchableOpacity`
  height: 20px;
  width: 100px;
`;

export const ReadingText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${fonts.smaller};
  color: ${colors.black};
`;
