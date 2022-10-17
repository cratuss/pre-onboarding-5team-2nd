import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState, useContext } from 'react';
import Selectbox from './Selectbox';
import MoveButton from './MoveButton';
import { DataContext, SelectDateContext } from '../../App';

registerLocale('ko', ko);

const Calander = () => {
  const [exceptTime, setExceptTime] = useState([]);

  const { data, setData } = useContext(DataContext);
  const { selectDate, setSelectDate } = useContext(SelectDateContext);

  useEffect(() => {
    let test = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].date.substr(0, 16) === String(selectDate).substr(0, 15)) {
        test.push(data[i].time.substr(0, 2));
      }
    }
    setExceptTime(test);
  }, [selectDate]);

  return (
    <CalanderBlock>
      <DatePicker selected={selectDate} onChange={date => setSelectDate(date)} locale={ko} inline />
      <Selectbox exceptTime={exceptTime} />
      <MoveButton />
    </CalanderBlock>
  );
};

const CalanderBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 50px 0;
  height: 100%;
  @media screen and (max-width: 967px) {
    padding: 0;
  }

  .react-datepicker {
    font-size: 1.5em;
  }
  .react-datepicker__header {
    padding-top: 1.3em;
  }
  .react-datepicker__month {
    margin: 0.4em 1.5em;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2.4em;
    line-height: 2.4em;
    margin: 0.166em;
  }
  .react-datepicker__current-month {
    font-size: 1em;
  }
  .react-datepicker__navigation {
    top: 1em;
    line-height: 1.7em;
    border: 0.8em solid transparent;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #ccc;
    left: 1em;
  }
  .react-datepicker__navigation--next {
    border-left-color: #ccc;
    right: 1em;
  }
  @media screen and (max-width: 560px) {
    .react-datepicker {
      font-size: 1em;
    }
    .react-datepicker__header {
      padding-top: 0.8em;
    }
    .react-datepicker__month {
      margin: 0.4em 1em;
    }
    .react-datepicker__day-name,
    .react-datepicker__day {
      width: 1.9em;
      line-height: 1.9em;
      margin: 0.166em;
    }
    .react-datepicker__current-month {
      font-size: 1em;
    }
    .react-datepicker__navigation {
      top: 0.5em;
      line-height: 1.2em;
      border: 0.8em solid transparent;
    }
    .react-datepicker__navigation--previous {
      border-right-color: #ccc;
      left: 1em;
    }
    .react-datepicker__navigation--next {
      border-left-color: #ccc;
      right: 1em;
    }
  }
`;

export default Calander;
