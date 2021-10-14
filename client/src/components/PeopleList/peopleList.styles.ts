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

  .boxWrap {
    background-color: gray;
    border-radius: 12px;
    height: 100px;
    margin: 50px;
    padding: 20px;
    align-content: center;
    text-align: center;

    h3 {
      span {
        margin-left: 10px;
      }
    }
  }
`;
