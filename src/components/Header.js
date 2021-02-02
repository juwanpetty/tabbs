import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 14px;
    font-weight: 500;
  }

  > div {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 40px;
    align-items: center;
  }
`;

const LeftControls = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
`;

const Header = () => {
  return (
    <Container>
      <h1>Overview</h1>
      <div className="header-controls">
        <LeftControls>
          <Button
            type="button"
            icon="Save"
            onClick={() => console.log('onClick')}
          />
          <Button
            type="button"
            icon="CreateNewFolder"
            onClick={() => console.log('onClick')}
          />
          <Button
            type="button"
            icon="Sort"
            onClick={() => console.log('onClick')}
          />
          <Button
            type="button"
            icon="DeleteSweep"
            onClick={() => console.log('onClick')}
          />
        </LeftControls>

        <Button
          type="button"
          icon="Add"
          onClick={() => console.log('onClick')}
        />
      </div>
    </Container>
  );
};

export default Header;
