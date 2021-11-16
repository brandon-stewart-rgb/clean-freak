
import React from 'react';
// import DatePicker from 'react-date-picker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



export default class SingleCal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Select Start Date  👻'}
        </p>
      </div>
    );
  }
}

