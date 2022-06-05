import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  justify-content: center;
  position: absolute;
  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: rgb(241, 241, 241);
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
    color: rgb(241, 241, 241);
  }
`;
export const MenuItemContainer = styled.div`
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    ${Content} {
      .title {
        color: gray;
      }
    }
  }
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
`;
