import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {
        text: '',
        set_date: '',
        set_time: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    this.setState((prevState) => {
      const schedule = {
        ...prevState.schedule,
        [name]: value,
        user_id: this.props.user.id
      }
      this.handleSubmit(schedule);
      return {
        schedule
      }
    })
  }

  //prevent user from adding line breaks
  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  handleExit(e) {
    if (!this.state.schedule.id && this.state.schedule.text !== "") {
      console.log(this.state.schedule);
    }
  }

  // if schedule has id then update
  // if schedule has an id and text is empty it will be deleted
  // if schedule has no id then it needs to be created
  // allows for users to create and update without having to click buttons / links
  handleSubmit(schedule) {
    if (schedule.id && schedule.text === "") {
      this.props.onDelete(schedule.id);
    } else if (schedule.id) {
      this.props.onEdit(schedule)
    }
  }

  setInitialValues() {
    this.setState((prevState) => {
      const { date, time } = this.props;
      const set_date = this.props.dateFormat(date)
      return {
        schedule: {
          ...prevState.schedule,
          set_date,
          set_time: time
        }
      }
    })
  }

  // set value of schedule to be any created schedules retrieved from db
  setCreatedValues(schedule) {
    this.setState({ schedule })
  }

  componentDidMount() {
    if(this.props.schedule) {
      this.setCreatedValues(this.props.schedule)
    } else {
      this.setInitialValues();
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            readOnly
            value={this.props.time}
          />
          <textarea
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
            value={this.state.schedule.text}
            onBlur={this.handleExit}
            name="text"
          />
        </form>
      </div>
    )
  }
}

export default Form;
