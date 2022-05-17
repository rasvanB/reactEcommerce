import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BackgroundImage, MenuItemContainer, Content } from "./menu-item.styles";
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
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
