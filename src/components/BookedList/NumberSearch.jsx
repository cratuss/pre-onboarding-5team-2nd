import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { DataContext, ReservationDataContext } from '../../App';
import ModalHandler from './ModalHandler';
import { useNavigate } from 'react-router-dom';

const NumberSearch = () => {
  const [inputNum, setInputNum] = useState();
  const [modalup, setModalup] = useState(false);
  const { reservationData, setReservationData } = useContext(ReservationDataContext);

  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  const changeHandler = word => {
    setInputNum(word.currentTarget.value);
  };

  const confirm = () => {
    let result = false;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].no);
      console.log(data[i].reservation_name);
      if (String(data[i].no) === inputNum) {
        setReservationData(data[i]);
        result = true;
        break;
      } else if (data[i].reservation_name === inputNum) {
        setReservationData(data[i]);
        result = true;
        break;
      }
    }

    if (result) {
      navigate('./info');
    } else {
      modalUpBtn();
    }
  };

  return (
    <NumberSearchBlock>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='inputGroup-sizing-default'>예약번호 또는 예약자명</InputGroup.Text>
        <Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' placeholder='예약했을때 발급받은 번호를 입력해주세요' onChange={word => changeHandler(word)} />
        <Button variant='primary' size='lg' onClick={() => confirm()} disabled={inputNum ? false : true}>
          확인
        </Button>
      </InputGroup>
      {modalup && <ModalHandler modalUpBtn={modalUpBtn} />}
    </NumberSearchBlock>
  );
};

const NumberSearchBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 50px 0;
  margin: 0px 10vw;
  height: 100%;
  @media screen and (max-width: 585px) {
    .input-group {
      span {
        font-size: 0.7rem;
      }
      input {
        font-size: 0.7rem;
      }
      button {
        font-size: 0.7rem;
      }
    }
  }
`;

export default NumberSearch;
