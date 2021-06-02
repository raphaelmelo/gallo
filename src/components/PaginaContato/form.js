import React from 'react';
import styled from 'styled-components'

//Styled Components
const ContatoP = styled.p`
  font-family: Bebas Neue;
  display: flex;
  justify-content: center;
  font-size: 7vh;
  padding-bottom: 5%;
  padding-top: 5%;

  @media only screen and (max-width: 767px) {
    font-size: 3.5vh;
    padding-bottom: 10%;  
  }
`
const ContatoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  min-height:100vh;
  width:100%;
  align-items: center;
  justify-content:center;
  
  @media only screen and (max-width: 767px) {
    min-height:50vh;
    padding-top: 10%;
  }
`
const ContatoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  justify-content: center;
  align-items: center;

  textarea {
    width: 70%;
    display: flex;
    padding: 15px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 4px;
    height: 150px;
    align-self: center;
    background-color: transparent;
    font-family: Bebas Neue;
    color: white;
    font-size: 18px;
    resize: none;
  }
`
const ContatoButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  margin: 25px;
  width: 200px;
  height: 50px;
  font-family: Bebas Neue;
  font-size: 35px;
  text-align: center;
`
const ContatoInput = styled.input`
  width: 70%;
  padding: 15px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  
  background-color: transparent;
  font-family: Bebas Neue;
  color: white;
  font-size: 18px;
`
export default function Form() {
    return (
        < ContatoWrapper >
            <ContatoP>ENTRE EM CONTATO PARA PALESTRAS</ContatoP>
            <ContatoForm action="" method="">
                <label />
                <ContatoInput type="text" placeholder="Nome" />
                <label />
                <ContatoInput type="email" placeholder="E-mail" />
                <label />
                <ContatoInput type="text" placeholder="Assunto" />
                <label />
                <textarea placeholder="Mensagem" rows="10" />
                <ContatoButton type="submit">ENVIAR</ContatoButton>
            </ContatoForm>
        </ContatoWrapper >
    );
}