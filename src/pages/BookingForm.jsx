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
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  align-items: center;
`;

export default BookingForm;
