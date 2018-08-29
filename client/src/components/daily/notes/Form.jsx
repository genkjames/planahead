import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        user_id: '',
        text: '',
        set_date: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        note: {
          ...prevState.note,
          [name]: value,
          user_id: this.props.user.id
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.note, this.props.user.id)
    .then(this.props.history.push(`/dashboard/daily/${this.state.note.set_date}/notes`));
  }

  // sets date when user creates a new note
  setDate() {
    const date = this.props.dateFormat(this.props.date);
    this.setState((prevState) => {
      return {
        note: {
          ...prevState.note,
          set_date: date
        }
      }
    })
  }

  componentDidMount() {
    if (this.props.note) {
      this.setState({
        note: this.props.note
      })
    } else {
      this.setDate();
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text">Note</label>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="text"
              value={this.state.note.text}
              id="text"
            />
          </div>
          <div>
            <button className="links" value="submit">{this.props.label} Note</button>
            <Link className="links" to={`/dashboard/daily/${this.state.note.set_date}/notes`}>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
