import styled from 'styled-components';
import AllForm from '../components/BookingForm/AllForm';

const BookingForm = () => {
  return (
    <BookingFormBlock>
      <AllForm />
    </BookingFormBlock>
  );
};

const BookingFormBlock = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  top: 100px;
  @media screen and (max-width: 967px) {
    width: 100%;
    margin: auto 0px;
  }
`;

export default BookingForm;
