import styled from "styled-components";

export const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin-top: 70px;
`;


export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(85,23,168,0.5) 100%);
    z-index: 1;
`;


export const BannerContent = styled.div`
    position: relative;
    z-index: 2;
    text-align: left;
    max-width: 900px;
    padding: 20px;

    p{
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }
`;


export const Metrics = styled.div`
    display: flex;
    justify-content: space-around;
`;


export const MetricItem = styled.div`
    text-align: center;

    h2{
        font-size: 36px;
        margin: 0;
    }


    p{
        font-size: 14px;
        margin: 0;
    }
`