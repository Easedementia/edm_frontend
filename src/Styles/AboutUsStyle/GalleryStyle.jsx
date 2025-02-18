import styled from 'styled-components';

export const GalleryContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
  text-align: center;


  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;


export const Caption = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  text-align: left;
  margin-bottom: 15px;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 10px;
  }
`;


export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageItem = styled.div`
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }


    @media (max-width: 1024px) {
    border-radius: 6px;
    }

    @media (max-width: 768px) {
        border-radius: 4px;
    }

    @media (max-width: 480px) {
        border-radius: 2px;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  margin-top: 30px;


  @media (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const SocialMediaText = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 0;


  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;

  svg, .svg-inline--fa {
    font-size: 1.5rem;
    color: #000;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #5517A8;
    }
  }


  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;





export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  padding: 10px;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    color: #5517A8;
  }
`;





export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
