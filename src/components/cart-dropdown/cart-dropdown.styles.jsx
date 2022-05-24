import styled from "styled-components";
import {
  ButtonContainer,
  GoogleButton,
  InvertedButton,
} from "../custom-button/custom-button.styles";
export const DropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${ButtonContainer},
  ${GoogleButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItemsContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;
