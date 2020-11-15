import React, { useState } from 'react';
import { Image, Modal } from 'react-native';
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
import ModalView from '../../components/ModalView';

function Home() {
  const[isVisible, setIsVisible] = useState(false);

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

        <SettingsButton onPress={() => {}}>
          <Ionicons name='menu' size={24} />
        </SettingsButton>
      </Header>

      <ContainerAmount>
        <AmountText>Saldo disponível</AmountText>
        
        <ContentAmount>
          <Amount>{`R$ 1222,00`}</Amount>
          <ShowAmount onPress={() => {}}>
            <Ionicons style={{ paddingLeft: 12, paddingBottom: 10 }} name='eye' size={24} />
          </ShowAmount>
        </ContentAmount>
      </ContainerAmount>

      <SectionText>Principais funcionalidades</SectionText>
      
      <Content>
        <Button icon='barcode' title='Pague um boleto' onPress={() => {}} />
        <Button icon='addAlert' title='Adicionar um lembrete' onPress={() => {}} />
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
        <ModalView goBack={() => setIsVisible(false)} />
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
