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

  handleSubmit(sched) {
    this.props.onSubmit(sched);
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

  componentDidMount() {
    this.setInitialValues();
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
