import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function DateDisplay() {

  

  return (
    <DayPicker
    
      initialMonth={new Date(2021, 10)}
      selectedDays={[
        new Date(2021, 10, 12),
        new Date(2021, 10, 17),
     
        // {
        //   after: new Date(2021, 11, 20),
        //   before: new Date(2021, 1, 25),
        // },
      ]}
    />
  );
}