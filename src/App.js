import Cards from './Components/Cards';
import Container from './Components/Container';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Container>
    <Sidebar/>
      <div className='flex-col p-10'>
        <h1 className='text-xl font-medium'>Product Roadmap</h1>
        <Cards/>
      </div>

    </Container>
  );
}

export default App;
