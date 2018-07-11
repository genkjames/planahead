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
          <p>{this.props.note.text}</p>
          {this.props.manipulate && <div className="actions">
            <Link to={`/dashboard/daily/notes/edit/${this.props.note.id}`}>
              <i className="fa fa-pencil fa-hover"></i>
            </Link>
            <button onClick={() => this.handleDelete(this.props.note.id)}>
              <i className="fa fa-trash fa-hover"></i>
            </button>
          </div>}
        </div>
      </div>
    )
  }
}

export default View;
