import styled from "styled-components";

export const PeopleListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column nowrap;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex-direction: row nowrap;
  justify-content: center;
  align-items: center;

  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;

    .pagination__button {
      margin: 0 10px;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      color: #FFFFFF;
      background-color: #000000;
    }
  }

  .boxWrap {
    cursor: pointer;
    background-color: gray;
    border-radius: 12px;
    height: auto;
    margin: 50px;
    padding: 20px;
    align-content: center;
    text-align: center;

    h3, p {
      span {
        margin-left: 10px;
      }
    }
  }
`;
