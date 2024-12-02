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


    @media (max-width: 768px) {
        height: 300px;
    }

    @media (max-width: 480px) {
        height: 250px;
    }
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
    padding: 3rem;
    max-width: 80%;
    overflow-wrap: break-word;
    word-break: break-word;


    @media (max-width: 768px) {
        padding: 3rem;
        max-width: 90%;
    }

    @media (max-width: 480px) {
        padding: 1.5rem;
        text-align: center;
        max-width: 100%;
        overflow-wrap: break-word;
        word-break: break-word;
    }
`;


export const TextParagraph = styled.p`
    font-size: 1.2rem;
    margin: 0.5rem 0;
    line-height: 1.3;


    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1;
        text-align: left;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
        line-height: 1;
        margin: 0.3rem 0;
        text-align: left;
    }
`;