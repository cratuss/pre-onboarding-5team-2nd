import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { DataContext, SelectTimeContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import ModalHandler from '../BookedList/ModalHandler';

const MoveButton = () => {
  const navigate = useNavigate();
  const [modalup, setModalup] = useState(false);
  const { selectTime, setSelectTime } = useContext(SelectTimeContext);
  const { data, setData } = useContext(DataContext);

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  const clickHandler = () => {
    let result = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].reservation_name === JSON.parse(localStorage.getItem('name'))) {
        result = false;
        break;
      }
    }
    if (result) {
      navigate('../form');
    } else {
      modalUpBtn();
    }
  };

  useEffect(() => {
    setSelectTime();
  }, []);

  return (
    <MoveButtonBlock>
      <Button variant='primary' size='lg' onClick={() => navigate('../')} active>
        이전
      </Button>
      <Button variant={selectTime ? 'primary' : 'secondary'} size='lg' onClick={() => clickHandler()} style={{ cursor: selectTime ? 'pointer' : 'default' }} active>
        예약정보 입력
      </Button>
      {modalup && <ModalHandler message={'이미 예약하신 정보가 있습니다'} modalUpBtn={modalUpBtn} />}
    </MoveButtonBlock>
  );
};

const MoveButtonBlock = styled.div`
  display: flex;
  padding: 10px;
  width: 46%;
  button {
    width: 100%;
    margin: 0 10px 0 10px;
    border: none;
  }
  @media screen and (max-width: 967px) {
    width: 80%;
    button {
      font-size: 0.8em;
    }
  }
`;

export default MoveButton;
