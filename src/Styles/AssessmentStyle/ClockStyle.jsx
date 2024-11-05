import styled from 'styled-components';

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ClockFace = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 8px solid black;
  border-radius: 50%;
  background-color: #fff;
`;

export const Hand = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  background-color: black;

  &.hour {
    width: 6px;
    height: 80px;
    transform: translateX(-50%);
  }

  &.minute {
    width: 4px;
    height: 110px;
    transform: translateX(-50%);
  }
`;

export const NumberContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  font-size: 20px;
  font-weight: bold;
`;

export const TimeDisplay = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
