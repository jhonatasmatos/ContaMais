import React, { useState } from 'react';
import { Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { 
  Container,
  Content, 
  Header,
  AvatarContainer,
  Avatar,
  ContainerText,
  Name,
  EditProfile,
  EditProfileText,
  SettingsButton,
  ContainerAmount,
  AmountText,
  ContentAmount,
  Amount,
  ShowAmount, 
  SectionText,
  ContainerSpeak,
  TextLiveSpeak
} from './styles';

import avatarImage from '../../assets/avatar.png';
import Button from '../../components/Button';
import ModalVirtualRoom from '../../components/ModalVirtualRoom';
import ModalReminder from '../../components/ModalReminder';

function Home() {
  const[isVisible, setIsVisible] = useState(false);
  const[amountIsVisible, setAmountIsVisible] = useState(true);
  const[reminderIsVisible, setReminderIsVisible] = useState(false);

  const handleShowAmount = () => {
    setAmountIsVisible(!amountIsVisible);
  }

  return (
    <Container>

      <Header>
        <AvatarContainer>
          <Avatar source={avatarImage} />
        </AvatarContainer>

        <ContainerText>
          <Name>Joana Silva</Name>
          <EditProfile>
            <EditProfileText>{'editar perfil  >'}</EditProfileText>
          </EditProfile>
        </ContainerText>

        <SettingsButton onPress={handleShowAmount}>
          <Ionicons name='menu' size={24} />
        </SettingsButton>
      </Header>

      <ContainerAmount>
        <AmountText>Saldo disponível</AmountText>
        
        <ContentAmount>
          <Amount>{ amountIsVisible ? `R$ 1222,00` : `R$ *******`}</Amount>
          <ShowAmount onPress={handleShowAmount}>
            <Ionicons style={{ paddingLeft: 12, paddingBottom: 10 }} name={amountIsVisible ? 'eye' : 'eye-off'} size={24} />
          </ShowAmount>
        </ContentAmount>
      </ContainerAmount>

      <SectionText>Principais funcionalidades</SectionText>
      
      <Content>
        <Button icon='barcode' title='Pague um boleto' onPress={() => {}} />
        <Button icon='addAlert' title='Seus lembretes' onPress={() => setReminderIsVisible(true)} />
        <Button icon='compareArrows' title='Transfira para alguém' onPress={() => {}} />
      </Content>

      <ContainerSpeak onPress={() => setIsVisible(true) }>
        <Ionicons name='chevron-up-outline' size={14} />
        <TextLiveSpeak>Fale ao vivo com um atendente</TextLiveSpeak>
      </ContainerSpeak>

      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
        transparent
      >
        <ModalVirtualRoom goBack={() => setIsVisible(false)} />
      </Modal>

      <Modal
        visible={reminderIsVisible}
        animationType="slide"
        onRequestClose={() => setReminderIsVisible(false)}
        transparent
      >
        <ModalReminder goBack={() => setReminderIsVisible(false)} />
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
