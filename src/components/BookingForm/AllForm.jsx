import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { DataContext } from '../../App';
import { SelectDateContext, SelectTimeContext, ReservationNumContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const AllForm = () => {
  const [reservationName, setReservationName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [type, setType] = useState('건강검진');
  const [content, setContent] = useState('');

  const { data, setData } = useContext(DataContext);
  const { selectDate, setSelectDate } = useContext(SelectDateContext);
  const { selectTime, setSelectTime } = useContext(SelectTimeContext);
  const { reservationNum, setReservationNum } = useContext(ReservationNumContext);

  const navigate = useNavigate();

  const changeHandler = (word, formType) => {
    if (formType === 'reserve') {
      setReservationName(word.currentTarget.value);
    } else if (formType === 'patient') {
      setPatientName(word.currentTarget.value);
    } else if (formType === 'content') {
      setContent(word.currentTarget.value);
    }
  };

  const handleSubmit = event => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const newData = {
      no: result,
      reservation_name: reservationName,
      patient_name: patientName,
      date: String(selectDate).substr(0, 15),
      time: Number(selectTime) + ':00',
      type: type,
      content: content,
    };
    let test = data;
    test.push(newData);
    setReservationNum(result);
    setData(test);
    event.preventDefault();
    navigate('./complete');
  };

  return (
    <FormBlock>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>예약자 이름</Form.Label>
          <Form.Control type='text' onChange={word => changeHandler(word, 'reserve')} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>환자 이름</Form.Label>
          <Form.Control type='text' onChange={word => changeHandler(word, 'patient')} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>목적</Form.Label>
          <Form.Select
            onChange={selected => {
              setType(selected.currentTarget.value);
            }}
          >
            <option value={'건강검진'}>건강검진</option>
            <option value={'진료'}>진료</option>
            <option value={'치료'}>치료</option>
            <option value={'예방접종'}>예방접종</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>구체적인 상태</Form.Label>
          <Form.Control as='textarea' style={{ height: '100px' }} onChange={word => changeHandler(word, 'content')} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='해당 정보가 병원으로 전송되는 것에 동의하십니까?' />
        </Form.Group>

        <Button variant='primary' type='submit' size='lg' disabled={reservationName && patientName && content ? false : true}>
          예약하기
        </Button>
      </Form>
    </FormBlock>
  );
};

const FormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 50px 0;
  height: 100%;
  form {
    width: 60%;
  }
`;

export default AllForm;
