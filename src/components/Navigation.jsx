import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavigationBlock>
      <ul>
        <li>
          <Link to='main'>예약 하기</Link>
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
  position: fixed;
  left: 0;
  width: 15%;
  height: 100%;
  border-right: 1px solid #000000;
  font: bold 20px/1 Noto Sans KR;
  li {
    margin: 0 0 50px 0;
  }
`;

export default Navigation;
