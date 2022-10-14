import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import BookableList from './pages/BookableList';
import BookedList from './pages/BookedList';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path='/' element={<BookableList />} />
        <Route path='/form' element={<BookingForm />} />
        <Route path='/booked' element={<BookedList />} />
      </Routes>
    </>
  );
}

export default App;
