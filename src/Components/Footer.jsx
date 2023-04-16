import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
const Container = styled.div`
    display : flex;
`
const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
  margin: 20px 0px; 
    
`
const SocialContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    color: white;   
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`
const Center = styled.div`
    flex : 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex : 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JERRY'S.</Logo>
            <Description>Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Nam facere facilis ipsum, animi corporis consequuntur 
                voluptatibus atque dolore excepturi vitae dolor deleniti magni? 
                Praesentium illo in ut magnam iusto distinctio?</Description>
            <SocialContainer  >
                <SocialIcon color='3b5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> 622 Iganmu Path , Lagos Nigeria 98336
            </ContactItem>
            <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +234 810 159 0149
            </ContactItem>
            <ContactItem>
                <MailOutlinedIcon style={{marginRight:"10px"}} /> contact@jeremiah.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer