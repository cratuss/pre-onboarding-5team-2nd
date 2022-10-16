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
  width: 85%;
`;

export default BookableList;
