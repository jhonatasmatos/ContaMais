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

// import compareArrows from '../../assets/compare_arrows.png';

interface ModalProps{
  goBack(): void;
}

const ModalView: React.FC<ModalProps> = ({ goBack }) => {
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
          <BankImage />

          <ContainerTextNews>
            <TextNews>
              Ações de grandes bancos estão baratas? Ou o desconto veio...
            </TextNews>

            <ReadingLink onPress={() => {}}>
              <ReadingText>{'leia a matéria  >'}</ReadingText>
            </ReadingLink>
          </ContainerTextNews>
        </ContainerNews>

        <ContainerNews>
          <BankImage />

          <ContainerTextNews>
            <TextNews>
              Ações de grandes bancos estão baratas? Ou o desconto veio...
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

export default ModalView;