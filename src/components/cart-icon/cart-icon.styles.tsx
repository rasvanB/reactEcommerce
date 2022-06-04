import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
export const ShoppingIcon = styled(ShoppingSvg)`
  width: 35px;
  height: 45px;
`;
export const IconContainer = styled.div`
  margin-left: px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 12px;
`;
