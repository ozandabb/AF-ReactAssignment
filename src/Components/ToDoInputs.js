import React, {Component} from 'react';

class ToDoInputs extends Component {
    render() {
        const {item, handleChange, Additem, editItem} =this.props
        return (
            <div className="card card-body my-3">
            <form onSubmit={Additem}>
            <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter ToDo Item"
            value={item}
            onChange={handleChange}/>
            </div>
        <button type="submit"  cla
                className={
                    editItem ? "btn btn-block btn-success mt-3" :"btn btn-block btn-primary mt-3"
                }>
                    {editItem ? "Edit Item" : "Submit"}
            </button>
        </form>
    </div>
        );
    }
}

export default ToDoInputs;