import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import companymark from '../assets/images/companymark.png';

const Navigation = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  return (
    <NavigationBlock>
      <ul>
        <li>
          <img src={companymark} alt={'companymark'} onClick={() => clickHandler()} />
        </li>
        <li>
          <Link to='bookableList'>예약 하기</Link>
        </li>
        <li>
          <Link to='booked'>예약 조회</Link>
        </li>
      </ul>
    </NavigationBlock>
  );
};

const NavigationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 20%;
  height: 100%;
  border-right: 1px solid #000000;
  font: bold 1.5em/1 'Noto Sans KR';
  li {
    text-align: center;
    margin: 0 0 50px 0;
    img {
      width: 80%;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 967px) {
    align-items: center;
    border-bottom: 1px solid #000000;
    height: 10%;
    width: 100%;
    ul {
      display: flex;
      li {
        margin: auto 0px;
        padding-right: 10px;
      }
    }
  }
`;

export default Navigation;
