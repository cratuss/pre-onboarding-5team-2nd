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
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  top: 300px;
  @media screen and (max-width: 967px) {
    width: 100%;
    margin: auto 0px;
  }
`;

export default BookedList;
