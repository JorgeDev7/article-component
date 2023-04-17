import Card from './components/Card';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 120rem;
  width: 95%;
  margin-inline: auto;
`;

function App() {

  return (
    <Container>
      <Card />
    </Container>
  )
}

export default App
