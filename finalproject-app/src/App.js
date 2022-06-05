import { Home, Login, ProductDetail, Purchase } from './pages';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LoadingScreen } from './components';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';




function App() {

  const isLoading = useSelector(state => state.isLoading);


  return (
    <HashRouter>
      <Container>
        { isLoading && <LoadingScreen /> }
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/login' element={< Login />} />
          <Route path='/product/:id' element={< ProductDetail />} />
          <Route path='/purchase' element={< Purchase />} />
        </Routes>
        </Container>
    </HashRouter>


  );
}

export default App;
