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
          <p>{this.props.event.text}</p>
          <div>
            <Link to={`/dashboard/daily/events/edit/${this.props.event.id}`}>
              <i className="fa fa-pencil"></i>
            </Link>
            <button onClick={() => this.handleDelete(this.props.event.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default View;
