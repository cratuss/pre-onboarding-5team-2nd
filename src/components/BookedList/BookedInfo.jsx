import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReservationDataContext } from '../../App';
import Button from 'react-bootstrap/Button';

const BookedInfo = () => {
  const [reserveDate, setReserveDate] = useState();
  const { reservationData, setReservationData } = useContext(ReservationDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    let date = new Date(reservationData.date);
    setReserveDate(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
  }, []);

  return (
    <Wrapper>
      <div className={'BookedInfoBlock'}>
        <div>
          <header>
            <p>알 림</p>
          </header>
          <p style={{ textAlign: 'left', paddingTop: '35px', color: 'black' }}>{reservationData.reservation_name}님의 예약정보입니다.</p>
          <p style={{ textAlign: 'left', paddingTop: '26px', color: 'black' }}>병원명: &nbsp;&nbsp;룰루랩 병원</p>
          <p style={{ textAlign: 'left', color: 'black' }}>환자명: &nbsp;&nbsp;{reservationData.patient_name}</p>
          <p style={{ textAlign: 'left', color: 'black' }}>날짜: &nbsp;&nbsp;{reserveDate}</p>
          <p style={{ textAlign: 'left', color: 'black' }}>
            시간: &nbsp;&nbsp;{Number(reservationData.time.substr(0, 2)) <= 12 ? '오전' : '오후'}&nbsp;{reservationData.time}
          </p>
          <p style={{ textAlign: 'left', color: 'black' }}>목적: &nbsp;&nbsp;{reservationData.type}</p>
          <p style={{ textAlign: 'left', color: 'black' }}>구체정보: &nbsp;&nbsp;{reservationData.content}</p>
          <Button
            as='input'
            type='button'
            value='메인으로'
            size='lg'
            onClick={() => {
              navigate('../../');
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  font: 1.5em/1 'Noto Sans KR';
  .BookedInfoBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    div {
      padding: 50px;
      border: 1px solid black;
      border-radius: 5px;
      p {
        margin: 10px 0;
      }
      input {
        margin-top: 20px;
      }
    }
  }
`;

export default BookedInfo;
