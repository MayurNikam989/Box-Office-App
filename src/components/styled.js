import styled from "styled-components";

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
`;

export const SearchCard = styled.div`
  width: 250px;
  height: 100%;
  margin: 0 15px 15px;

  .img-wrapper {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border: 1.5px solid black;
    border-radius: 35px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h4 {
    margin: 2px;
    font-size: medium;
  }
  p {
    margin: 0;
  }
`;
