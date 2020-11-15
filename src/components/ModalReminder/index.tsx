import React from 'react';
import { ScrollView, Image } from 'react-native';
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
  TextLiveSpeak
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

      <VoiceButton style={{ elevation: 2 }}>
        <Image source={voiceIcon} style={{ width: 18, height: 18 }} />
      </VoiceButton>

      <ContainerSpeak onPress={() =>{}}>
        <Ionicons name='chevron-up-outline' size={14} />
        <TextLiveSpeak>Adicionar um novo lembrete</TextLiveSpeak>
      </ContainerSpeak>
    </Container>
  );
}

export default ModalReminder;