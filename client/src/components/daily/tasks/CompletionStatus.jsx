import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompletionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

   // when clicked task is updated to being complete / incomplete in database
  handleClick() {
    if (this.props.manipulate) {  
      const { id, user_id, text, set_date, is_complete } = this.props.task;
      this.setState({
        complete: {
          id,
          user_id,
          text,
          set_date,
          is_complete: !is_complete
        }     
      },() => { 
        this.props.onEdit(this.state.complete)
      });
    }
  }

  render() {
    let divClassNames = "view task";
    let fade = "";

    if (this.props.task.is_complete) {
      divClassNames += " completed-task";
      fade = " fade";
    }
   
    return (
      <div>
        <div className={divClassNames}>
          <p className={fade} onClick={this.handleClick}>{this.props.task.text}</p>
          {this.props.manipulate && <div className="actions">
            <Link to={`/dashboard/daily/${this.props.task.set_date}/tasks/edit/${this.props.task.id}`}>
              <i className={`fa fa-pencil fa-hover${fade}`}></i>
            </Link>
            <button onClick={() => this.props.handleDelete(this.props.task.id)}>
              <i className={`fa fa-trash fa-hover${fade}`}></i>
            </button>
          </div>}
        </div>
      </div>
    )
  }
}

export default CompletionStatus;
