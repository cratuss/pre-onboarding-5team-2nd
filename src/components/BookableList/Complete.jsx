import { useContext } from 'react';
import styled from 'styled-components';
import { ReservationNumContext } from '../../App';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const { reservationNum, setReservationNum } = useContext(ReservationNumContext);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('../../');
  };

  return (
    <ReservationCompleteBlock>
      <div>
        <p>예약번호는 {reservationNum} 입니다.</p>
        <Button variant='primary' size='lg' onClick={() => clickHandler()}>
          메인으로
        </Button>
      </div>
    </ReservationCompleteBlock>
  );
};

const ReservationCompleteBlock = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  transform: translateY(240%);
  @media screen and (max-width: 967px) {
    margin: 0 auto;
  }
  div {
    text-align: center;
    p {
      font: bold 1.5em/1 'Noto Sans KR';
    }
    button {
      margin-top: 50px;
    }
  }
`;

export default Complete;
