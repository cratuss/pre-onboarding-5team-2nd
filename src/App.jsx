import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import BookableList from './pages/BookableList';
import BookedList from './pages/BookedList';
import BookingForm from './pages/BookingForm';
import Complete from './components/BookableList/Complete';
import BookedInfo from './components/BookedList/BookedInfo';

const Context = createContext({
  data: [],
  setData: () => {},
});

const Context1 = createContext({
  selectDate: '',
  setSelectDate: () => {},
});

const Context2 = createContext({
  selectTime: '',
  setSelectTime: () => {},
});

const Context3 = createContext({
  reservationNum: '',
  setReservationNum: () => {},
});

const Context4 = createContext({
  reservationData: '',
  setReservationData: () => {},
});

function App() {
  const [data, setData] = useState([]);
  const [selectDate, setSelectDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState();
  const [reservationNum, setReservationNum] = useState();
  const [reservationData, setReservationData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('/data/hospital.json');
        setData(data.patient_data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Context.Provider value={{ data, setData }}>
        <Context1.Provider value={{ selectDate, setSelectDate }}>
          <Context2.Provider value={{ selectTime, setSelectTime }}>
            <Context3.Provider value={{ reservationNum, setReservationNum }}>
              <Context4.Provider value={{ reservationData, setReservationData }}>
                <GlobalStyle />
                <Navigation />
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/bookableList' element={<BookableList />} />
                  <Route path='/form' element={<BookingForm />} />
                  <Route path='/form/complete' element={<Complete />} />
                  <Route path='/booked' element={<BookedList />} />
                  <Route path='/booked/info' element={<BookedInfo />} />
                </Routes>
              </Context4.Provider>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </>
  );
}

export default App;
export const DataContext = Context;
export const SelectDateContext = Context1;
export const SelectTimeContext = Context2;
export const ReservationNumContext = Context3;
export const ReservationDataContext = Context4;
