import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 280px) 3fr;
  height: 100vh;
`;

const Main = styled.main``;

const Aside = styled.aside`
  padding: 16px;
  background: #f8f8f9;
  border-right: 1px solid #e0e3e6;
`;

const Index = () => {
  return (
    <Container>
      <Aside>
        {/* <!-- start sidebar content --> */}
        <Sidebar />
        {/* <!-- end sidebar content --> */}
      </Aside>
      <Main>
        <Header />
        {/* <!-- start main content --> */}
        <p>Main content.</p>
        {/* <!-- end main content --> */}
      </Main>
    </Container>
  );
};

export default Index;
