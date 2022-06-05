import { useLocation, useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  MenuItemContainer,
  Content,
} from "./menu-item.styles";

import { FC } from "react";
type MenuItemProps = {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <MenuItemContainer onClick={() => navigate(`${pathname}${linkUrl}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </Content>
    </MenuItemContainer>
  );
};

export default MenuItem;
