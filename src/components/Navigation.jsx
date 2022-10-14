import styled from 'styled-components';

const Navigation = () => {
  return <NavigationBlock></NavigationBlock>;
};

const NavigationBlock = styled.div`
  position: fixed;
  left: 0;
  width: 20%;
  border-right: 1px solid #fffff;
`;

export default Navigation;
