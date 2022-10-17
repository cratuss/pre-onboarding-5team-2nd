import styled from 'styled-components';
import mainvideo from '../assets/images/mainvideo.mp4';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  const changeHandler = word => {
    setUserName(word.currentTarget.value);
  };

  return (
    <MainBlock>
      <video muted autoPlay loop>
        <source src={mainvideo} type='video/mp4' />
      </video>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='inputGroup-sizing-default'>사용자 이름</InputGroup.Text>
        <Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' placeholder='노쇼한 사람 - 최철한, 김성식' onChange={word => changeHandler(word)} />
        <Button
          variant='primary'
          size='sm'
          onClick={() => {
            localStorage.setItem('name', JSON.stringify(userName));
            navigate('./bookableList');
          }}
        >
          확인
        </Button>
      </InputGroup>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 20%;
  video {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 967px) {
    width: 100%;
    height: 80%;
    margin: 0 auto;
    top: 10%;
  }
`;

export default Main;
