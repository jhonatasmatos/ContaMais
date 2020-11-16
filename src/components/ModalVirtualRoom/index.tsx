import React, { useState, useMemo } from 'react';
import { ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getHours, getMinutes } from 'date-fns'

import { 
  Container,
  GoBackButton,
  Title,
  TitleWaitRoom,
  TipsText,
  ContainerLoading,
  Loading,
  ContainerEstimatedTime,
  EstimatedTimeText,
  EstimatedTime,
  ContainerNews,
  BankImage,
  ContainerTextNews,
  TextNews,
  ReadingLink,
  ReadingText,
  ButtonGoLive,
  ButtonGoLiveText
} from './styles';

import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';

interface ModalProps{
  goBack(): void;
}

const ModalVirtualRoom: React.FC<ModalProps> = ({ goBack }) => {
  const [width, setWidth] = useState(new Animated.Value(10));
  const [finished, setFinished] = useState(false);

  Animated.sequence([
    Animated.timing(width, {
      toValue: 180,
      duration: 1500,
      delay: 4000,
      useNativeDriver: false,
    }),

    Animated.timing(width, {
      toValue: 284,
      duration: 1500,
      useNativeDriver: false,
    })
  ]).start(({ finished }) => {
    if (finished) {
      const timer = setTimeout(() => {
        setFinished(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  });

  const fullHour = useMemo(() => `${getHours(Date.now())}:${getMinutes(Date.now())}`, [getHours, getMinutes]);

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
          <Animated.View 
            style={{
              width: width,
              height: 20,
              borderRadius: 4,
              backgroundColor: '#fff',
              margin: 6,
              paddingHorizontal: 4,
              paddingVertical: 2,
              alignItems: 'flex-end'
            }}>
              <Icon name='walking' size={14} />
          </Animated.View>
        </Loading>

        { finished ? (
          <ButtonGoLive>
            <ButtonGoLiveText>Ir para o atendimento</ButtonGoLiveText>
          </ButtonGoLive> 
        ): (
          <ContainerEstimatedTime>
            <EstimatedTimeText>
              Horário previsto para atendimento
            </EstimatedTimeText>

            <EstimatedTime>{fullHour}</EstimatedTime>
          </ContainerEstimatedTime>
        )}
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