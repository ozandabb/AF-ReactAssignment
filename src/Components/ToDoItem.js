import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import {faPen} from "@fortawesome/free-solid-svg-icons/faPen";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";

class ToDoItem extends Component {
    render() {
        const {title,deleteItems, editItems} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={editItems}>
                        <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span className="mx-2 text-danger" onClick={deleteItems}>
                         <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className="mx-2 text-success">
                         <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </div>
            </li>
        );
    }
}

export default ToDoItem;