import styled from "styled-components";
import { SearchCard } from "../styled";

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: none;
      background-color: white;
      font-size: xx-large;
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
