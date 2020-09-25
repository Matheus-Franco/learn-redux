import styled from 'styled-components';

export const Container = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 324px;
  height: 324px;

  span {
    background: #fafafa;
    height: 70%;
    padding: 16px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    height: 15%;
    background: #fafafa;
    padding: 0 16px;

    p {
      font-weight: 500;
      color: #000;

      & + p {
        margin-top: 4px;
      }
    }

    .title {
    }

    .price {
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

    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
