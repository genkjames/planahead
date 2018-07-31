import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {
        text: '',
        set_date: '',
        set_time: '',
      },
      focused: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleUnsavedChanges = this.handleUnsavedChanges.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const schedule = {
        ...prevState.schedule,
        [name]: value,
        user_id: this.props.user.id
      }
      this.handleSubmit(schedule);
      return {
        schedule,
        focused: true
      }
    })
  }

  //prevent user from adding line breaks
  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  // creates schedule once user leaves input box and schedule has no id 
  handleExit(e) {
    if (!this.state.schedule.id && this.state.schedule.text !== "") {
      this.props.onSubmit(this.state.schedule, this.props.user.id);
    }
    this.setState({
        focused: false
    })
  }

  // if schedule has id then update
  // if schedule has an id and text is empty it will be deleted
  // allows for users to edit and delete without having to click buttons / links
  handleSubmit(schedule) {
    if (schedule.id && schedule.text === "") {
      this.props.onDelete(schedule.id, this.props.user.id);
    } else if (schedule.id) {
      this.props.onEdit(schedule, this.props.user.id)
    }
  }

  handleUnsavedChanges() {
    if (this.state.focused) {
      this.handleExit();
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

    window.addEventListener('beforeunload', this.handleUnsavedChanges);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnsavedChanges);
    this.handleUnsavedChanges();
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
