import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive"
const Navbar = () => {
    const Container = styled.div`
        height: 60px;
        ${mobile({height: "50px"})}
        }
        
    `
    const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `
    const Left = styled.div`
      flex: 1;
      display: inline-flex;
      align-items: center;
    ` 
    const Language = styled.span `
      font-size: 14px;
      cursor: pointer;
     
    `

  const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
      align-items: center;
      margin-left: 30px;
      padding:10px;

  
  `
  const Input = styled.input`
    border:none;
  
  `
    const Center = styled.div`
    flex: 1;
    text-align:center;
    `

    const Logo = styled.h1`
      font-weight: bold;
    
    
    `
    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
    `
  return (
    <Container>
        <Wrapper>
            <Left> 
              <Language>En</Language>
              <SearchContainer>
                <Input/>
               
                <SearchIcon style={{color: "grey", fontSize:16}}/>
              </SearchContainer>
             </Left>
            <Center>
              <Logo>JERRY'S.</Logo>
            </Center>
            <Right>

              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                  <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon/>
                  </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
      
      
      </Container>
  )
}

export default Navbar