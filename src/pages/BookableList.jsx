import { createContext, useState } from 'react';
import styled from 'styled-components';
import Calander from '../components/BookableList/Calander';

const BookableList = () => {
  return (
    <BookableListBlock>
      <Calander />
    </BookableListBlock>
  );
};

const BookableListBlock = styled.div`
  position: relative;
  width: 80%;
  margin-left: 20%;
  @media screen and (max-width: 967px) {
    top: 100px;
    margin: 0 auto;
  }
`;

export default BookableList;
