import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
    render() {
        const {items, cleraList, deleteItems,editItems} = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">ToDo List</h3>
                {
                    items.map(item =>{
                        return <ToDoItem
                            key={item.id}
                            title={item.title}
                            deleteItems ={()=> deleteItems(item.id)}
                            editItems ={()=> editItems(item.id)}
                        />;
                    })
                }

                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={cleraList}>Clear List</button>
            </ul>
        );
    }
}

export default ToDoList;