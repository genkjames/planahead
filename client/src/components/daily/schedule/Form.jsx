import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
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
      return {
        event: {
          ...prevState.event,
          [name]: value
        }
      }
    })
  }

  setInitialValues() {
    this.setState((prevState) => {
      const { user, date, time } = this.props;
      const set_date = this.props.dateFormat(date)
      return {
        event: {
          ...prevState.event,
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
    console.log(this.state.event)
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
            value={this.state.event.text}
            name="text"
          />
        </form>
      </div>
    )
  }
}

export default Form;
