import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, Image, Animated, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import voiceIcon from '../../assets/record_voice_over_2.png';

import { 
  Container,
  GoBackButton,
  Title,
  TitleReminder,
  ContainerReminder,
  ReminderName,
  ReminderDate,
  VoiceButton,
  ContainerSpeak,
  TextLiveSpeak,
  TitleHelp,
  TextHelp,
  ButtonCloseTip,
  ButtonTextTip
} from './styles';

const reminders = [
  {
    'name': 'Conta de Energia',
    'date': '05/12/2020'
  },
  {
    'name': 'Aluguel',
    'date': '05/12/2020'
  },
  {
    'name': 'Condomínio',
    'date': '05/12/2020'
  },
  {
    'name': 'Plano de saúde',
    'date': '05/12/2020'
  },
  {
    'name': 'Conta de luz',
    'date': '05/12/2020'
  },
  {
    'name': 'Fatura cartão de crédito',
    'date': '05/12/2020'
  },
]

interface ModalProps{
  goBack(): void;
}

const ModalReminder: React.FC<ModalProps> = ({ goBack }) => {

  const tip1 = useRef(new Animated.Value(0)).current;
  const tip2 = useRef(new Animated.Value(0)).current;
  const tip3 = useRef(new Animated.Value(0)).current;
  const tip4 = useRef(new Animated.Value(0)).current;
  const tip5 = useRef(new Animated.Value(0)).current;

    Animated.sequence([
      Animated.timing(tip1, {
        toValue: 1,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip1, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip2, {
        toValue: 1,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip2, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip3, {
        toValue: 1,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip3, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip4, {
        toValue: 1,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip4, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip5, {
        toValue: 1,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),

      Animated.timing(tip5, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true
      }),
    ]).start();

  return(
    <Container>
      <GoBackButton onPress={goBack}>
        <Title>{'< Seus lembretes '}</Title>
      </GoBackButton>

      <TitleReminder>
        Confira os lembretes para pagamentos futuros 
      </TitleReminder>

      <ScrollView style={{ marginTop: 5, marginBottom: 60 }} showsVerticalScrollIndicator={false}>

        { reminders.map(reminder => (
          <ContainerReminder key={reminder.name}>
            <ReminderName>{reminder.name}</ReminderName>
            <ReminderDate>{reminder.date}</ReminderDate>
          </ContainerReminder>
        ))}

      </ScrollView>

      <VoiceButton style={{ elevation: 2 }} onPress={() => {}}>
        <Image source={voiceIcon} style={{ width: 18, height: 18 }} />
      </VoiceButton>

      <ContainerSpeak onPress={() =>{}}>
        <Ionicons name='chevron-up-outline' size={14} />
        <TextLiveSpeak>Adicionar um novo lembrete</TextLiveSpeak>
      </ContainerSpeak>

      <Animated.View 
        style={{
          width: 400,
          height: 290,
          borderBottomLeftRadius: 190,
          borderBottomRightRadius: 190,
          backgroundColor: '#ED6663',
          opacity: tip1,
          position: 'absolute',
          top: -100
        }}>
        <TitleHelp>Boas Vindas</TitleHelp>
        <TextHelp>Olá, esta é a sua páginade lembretes</TextHelp>
      </Animated.View>

      <Animated.View 
        style={{
          width: 400,
          height: 290,
          borderTopLeftRadius: 180,
          borderTopRightRadius: 180,
          backgroundColor: '#ED6663',
          opacity: tip2,
          position: 'absolute',
          bottom: -90
        }}>

        <TitleHelp> </TitleHelp>
        <TextHelp>Adicione lembretes para não se perder com as contas</TextHelp>
      </Animated.View>

      <Animated.View 
        style={{
          width: 400,
          height: 290,
          borderBottomLeftRadius: 190,
          borderBottomRightRadius: 190,
          backgroundColor: '#ED6663',
          opacity: tip3,
          position: 'absolute',
          top: -100
        }}>
        <TitleHelp>Dica:</TitleHelp>
        <TextHelp>Para adicionar um novo lembrete é só clicar no botão</TextHelp>
      </Animated.View>

      <Animated.View 
        style={{
          width: 400,
          height: 290,
          borderTopLeftRadius: 180,
          borderTopRightRadius: 180,
          backgroundColor: '#ED6663',
          opacity: tip4,
          position: 'absolute',
          bottom: -90
        }}>

        <TitleHelp> </TitleHelp>
        <TextHelp>Para ouvir novamente clique no botão ao lado</TextHelp>
      </Animated.View>

      <Animated.View 
        style={{
          width: 400,
          height: 290,
          borderBottomLeftRadius: 190,
          borderBottomRightRadius: 190,
          backgroundColor: '#ED6663',
          opacity: tip5,
          position: 'absolute',
          top: -100
        }}>
        <TitleHelp> </TitleHelp>
        <TextHelp>E para voltar na página anterior clique aqui</TextHelp>
        
        <ButtonCloseTip onPress={() => {}}>
          <ButtonTextTip>{`< Seus lembretes`}</ButtonTextTip>
        </ButtonCloseTip>
      </Animated.View>
    </Container>
  );
}

export default ModalReminder;