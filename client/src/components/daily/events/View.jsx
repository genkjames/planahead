import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <div>
        <div className="view">
          <div className="event-info">
            <p><i className="fa fa-book forShow"></i> {this.props.event.set_time}</p>
            <p>{this.props.event.text}</p>
          </div>
          <div className="actions">
            <Link to={`/dashboard/daily/events/edit/${this.props.event.id}`}>
              <i className="fa fa-pencil fa-hover"></i>
            </Link>
            <button onClick={() => this.handleDelete(this.props.event.id)}>
              <i className="fa fa-trash fa-hover"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default View;
