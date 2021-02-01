import styled from 'styled-components';
import Spacer from './Spacer';
import Button from './Button';

const Container = styled.div`
  height: 56px;
  padding: 0 32px;
  border-bottom: 1px solid #e0e3e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Header = () => {
  return (
    <Container>
      <h1>Overview</h1>
      <div className="header-controls">
        <Spacer size={40} />
        <Button icon="Add" onClick={() => console.log('onClick')} />
      </div>
    </Container>
  );
};

export default Header;
