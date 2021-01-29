import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 32px;
  padding: 32px 32px 0;
  height: 100vh;
`;

const Main = styled.main``;

const Aside = styled.aside`
  max-width: 380px;
`;

const Index = () => {
  return (
    <Container>
      <Aside>
        {/* <!-- start sidebar content --> */}
        <p>Sidebar content.</p>
        {/* <!-- end sidebar content --> */}
      </Aside>
      <Main>
        {/* <!-- start main content --> */}
        <p>Main content.</p>
        {/* <!-- end main content --> */}
      </Main>
    </Container>
  );
};

export default Index;
