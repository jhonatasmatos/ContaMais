import React from 'react';
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Container,
  GoBackButton,
  Title,
  TitleWaitRoom,
  TipsText,
  ContainerLoading,
  Loading,
  LoadingInternal,
  ContainerEstimatedTime,
  EstimatedTimeText,
  EstimatedTime,
  ContainerNews,
  BankImage,
  ContainerTextNews,
  TextNews,
  ReadingLink,
  ReadingText
} from './styles';

import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';

interface ModalProps{
  goBack(): void;
}

const ModalVirtualRoom: React.FC<ModalProps> = ({ goBack }) => {
  return(
    <Container>
      <GoBackButton onPress={goBack}>
        <Title>{'< Sala virtual'}</Title>
      </GoBackButton>

    <ScrollView style={{ marginTop: 5}} showsVerticalScrollIndicator={false}>

      <TitleWaitRoom>
        Você está na sala de espera virtual do Conta Mais
      </TitleWaitRoom>

      <TipsText>
        Em breve um de nossos especialistas irá te atender em vídeo chamada para tirar sua dúvida
      </TipsText>

      <ContainerLoading>
        <Loading>
          <LoadingInternal>
            <Icon name='walking' size={14} />
          </LoadingInternal>
        </Loading>

        <ContainerEstimatedTime>
          <EstimatedTimeText>
            Horário previsto para atendimento
          </EstimatedTimeText>

          <EstimatedTime>13:31</EstimatedTime>
        </ContainerEstimatedTime>
      </ContainerLoading>
        <TitleWaitRoom>
          Enquanto espera, que tal se informar com notícias do mundo de finanças?
        </TitleWaitRoom>

        <ContainerNews>
          <BankImage source={news1} />

          <ContainerTextNews>
            <TextNews>
              15 Dicas Poderosas Sobre Finanças Pessoais
            </TextNews>

            <ReadingLink onPress={() => {}}>
              <ReadingText>{'leia a matéria  >'}</ReadingText>
            </ReadingLink>
          </ContainerTextNews>
        </ContainerNews>

        <ContainerNews>
          <BankImage source={news2} />

          <ContainerTextNews>
            <TextNews>
              Os investimentos mais indicados para quem tem mais de 60
            </TextNews>

            <ReadingLink onPress={() => {}}>
              <ReadingText>{'leia a matéria  >'}</ReadingText>
            </ReadingLink>
          </ContainerTextNews>
        </ContainerNews>

        <ContainerNews>
          <BankImage source={news3} />

          <ContainerTextNews>
            <TextNews>
              André Zara: Você é velho demais para investir?
            </TextNews>

            <ReadingLink onPress={() => {}}>
              <ReadingText>{'leia a matéria  >'}</ReadingText>
            </ReadingLink>
          </ContainerTextNews>
        </ContainerNews>
      </ScrollView>
    </Container>
  );
}

export default ModalVirtualRoom;