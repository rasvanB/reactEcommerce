import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const Option = styled(Link)`
  &:hover {
    transform: scale(1.05);
    transition: transform 1s;
  }
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  color: black;
  padding: 10px 15px;
`;
