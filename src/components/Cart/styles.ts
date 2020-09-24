import styled from 'styled-components';

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;

  table {
    width: 100%;

    thead {
      background: #7267ec;

      tr {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 16px 0;

        th {
          color: #fff;
        }
      }
    }

    tbody {
      background: #ffc31e;

      tr {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 16px 0;

        td {
          display: flex;
          justify-content: center;

          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
`;
