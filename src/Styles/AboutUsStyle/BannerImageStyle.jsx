import styled from "styled-components";
import banner_image from '../../assets/images/banner_image.jpg'


export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    background-image: url(${banner_image});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(157, 180, 255, 0.5), rgba(98, 0, 255, 0.5));
`;


export const TextContainer = styled.div`
    position: relative;
    color: white;
    text-align: left;
    padding: 5rem;  
`;


export const TextParagraph = styled.p`
    font-size: 1.1rem;
    margin: 0.5rem 0;
`;