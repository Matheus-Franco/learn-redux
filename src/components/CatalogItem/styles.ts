import styled from 'styled-components';

export const Container = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 324px;
  height: 324px;

  border: 1px solid blue;

  span {
    background: #fff;
    height: 70%;
  }

  div {
    height: 15%;

    display: flex;
    justify-content: space-between;

    p {
      font-weight: 500;
    }

    .title {
      font-size: 16px;
    }

    .price {
      font-size: 20px;
    }
  }

  button {
    height: 15%;
    background: #7267ec;
    color: #fff;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
