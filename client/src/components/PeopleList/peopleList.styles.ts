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

  .results__count {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;

    .pagination__button {
      cursor: pointer;
      margin: 0px 10px;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      color: #000000;
      background-color: #FFFFFF;
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
    }

    .pagination__button:hover {
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.3);
    }
  }

  .boxWrap {
    background-color: #FFFFFF;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
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

  .boxWrap:hover {
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.3);
  }
`;
