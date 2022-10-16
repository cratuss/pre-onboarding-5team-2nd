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
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  align-items: center;
`;

export default BookableList;
