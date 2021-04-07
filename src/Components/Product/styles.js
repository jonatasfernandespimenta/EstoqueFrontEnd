import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 10%;
  background: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin-left: 30px;
  text-align: left;
`;

export const Button = styled.button`
  border-width: 0px;
  background: #20A506;
  height: 50%;
  width: 5%;
  margin-right: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
`;
