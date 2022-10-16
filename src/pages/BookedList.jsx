import styled from 'styled-components';
import NumberSearch from '../components/BookedList/NumberSearch';

const BookedList = () => {
  return (
    <BookedListBlock>
      <NumberSearch />
    </BookedListBlock>
  );
};

const BookedListBlock = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 20%;
`;

export default BookedList;
