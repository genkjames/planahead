import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {
        user_id: '',
        text: '',
        set_date: '',
        set_time: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const schedule = {
        ...prevState.schedule,
        [name]: value
      }
      this.handleSubmit(schedule);
      return {
        schedule
      }
    })
  }

  // if schedule has id then update
  // if schedule has an id and text is empty it will be deleted
  // if schedule has no id then it needs to be created
  // allows for users to create and update without having to click buttons / links
  handleSubmit(schedule) {
    if (schedule.id && schedule.text === "") {
      this.props.onDelete(schedule.id)
    } else if (schedule.id) {
      this.props.onEdit(schedule)
    } else {
      this.props.onSubmit(schedule);
    }
  }

  setInitialValues() {
    this.setState((prevState) => {
      const { user, date, time } = this.props;
      const set_date = this.props.dateFormat(date)
      return {
        schedule: {
          ...prevState.schedule,
          set_date,
          set_time: time,
          user_id: user.id
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
            value={this.state.schedule.text}
            name="text"
          />
        </form>
      </div>
    )
  }
}

export default Form;
