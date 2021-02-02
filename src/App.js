import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 280px) 3fr;
  height: 100vh;
  padding: 16px 16px 0;
  grid-column-gap: 16px;
`;

const Main = styled.main``;

const Aside = styled.aside``;

const App = () => {
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
        <Overview />
        {/* <!-- end main content --> */}
      </Main>
    </Container>
  );
};

export default App;
