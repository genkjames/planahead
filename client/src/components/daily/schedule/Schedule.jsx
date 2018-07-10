import React, { Component } from 'react';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: {},
      schedules: []
    }

    this.sort = this.sort.bind(this);
  }

  timeFormat(num, i) {
    if(i === 0) {
      return "12:00 AM"
    } else if (i === 12) {
      return "12:00 PM"
    } else if (i > 12) {
      return `${i -= 12}:00 PM`;
    } else {
      return `${i}:00 AM`;
    }
  }

  sort(a, b) {
    const num = this.sortingSchedules(a);
    const num2 = this.sortingSchedules(b);

    if (num < num2) {
      return -1;
    } else if (num > num2) {
      return 1;
    } else {
      return 0;
    }
  }

  sortingSchedules(schedule) {
    let num = parseInt(schedule.props.time.split(':')[0], 10);
    if(schedule.props.time.endsWith('PM') && num !== 12 ) {
      num += 12;
    }

    if(schedule.props.time.endsWith('AM') && num === 12) {
      num = 0;
    }

    return num;
  }

  filterTimes(time, obj) {
    if(obj.hasOwnProperty(time)) {
      return false;
    }
    return true;
  }

  filterDuplicates(schedule, index, obj) {
    if (obj.hasOwnProperty(schedule.set_time)) {
      obj[schedule.id] = {status: 'delete', index};
      return false;
    } else {
      obj[schedule.set_time] = true;
      return true;
    }
  }

  render() {
    let duplicatesObj = {};
    
    const schedules = this.props.schedules.filter(this.props.compareDate).reverse().filter((schedule, i) => this.filterDuplicates(schedule, i, duplicatesObj));
    
    // console.log(duplicatesObj);
    // if(Object.keys(duplicatesObj).length > 0) {
    //   console.log('hi');
    //   Object.keys(duplicatesObj).forEach(key => {
    //     if (duplicatesObj[key].status === 'delete') {
    //       this.props.schedules.splice(duplicatesObj[key].index, 1)
    //     }
    //   });
    //   console.log(this.props.schedules);
    // }

    const schedule = schedules.map(schedule => {
      return (
        <Form
          key={schedule.id}
          user={this.props.user}
          date={schedule.set_date}
          dateFormat={this.props.dateFormat}
          time={schedule.set_time}
          onSubmit={this.props.onSchedule}
          onEdit={this.props.onEdit}
          onDelete={this.props.onDelete}
          schedule={schedule}
        />
      )
    })

    let obj = {};

    schedules.forEach((schedule, i) => {
      obj[schedule['set_time']] = i
    })

    const times = Array(24).fill(0).map(this.timeFormat)
    .filter((schedule) => this.filterTimes(schedule, obj))
    .map(time => {
      return (
        <Form
          key={time}
          user={this.props.user}
          date={this.props.date}
          dateFormat={this.props.dateFormat}
          time={time}
          onSubmit={this.props.onSchedule}
          onEdit={this.props.onEdit}
          onDelete={this.props.onDelete}
        />
      )
    })

    const totalSchedules = [...schedule, ...times].sort(this.sort);

    return (
      <div className="schedule">
        <DailyMenu />
        <div className="container schedule-table">
          {totalSchedules}
        </div>
      </div>
    )
  }
}

export default Schedule;
