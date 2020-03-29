import React from 'react';
import './App.css';
import ToDoInputs from "./Components/ToDoInputs";
import ToDoList from "./Components/ToDoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'react-uuid';

class App extends React.Component{
    state = {
        items:[],
        id:uuid(),
        item:'',
        editItem:false
    };

    handleChange = e =>{
        this.setState({
            item:e.target.value
        });
    };

    Additem = e =>{
        e.preventDefault();
        const newItem = {
            id:this.state.id,
            title:this.state.item
        }

        const updateItem = [...this.state.items, newItem];
        this.setState({
            items:updateItem,
            item:'',
            id:uuid(),
            editItem:false
        });
    };

    cleraList = (e) =>{
        this.setState({
            items:[]
        });
    };

    deleteItems = id =>{
        const ItemsFilters = this.state.items.filter(item => item.id !== id);
        this.setState({
            items:ItemsFilters
        });
    };

    editItems = id =>{
        const ItemsFilters = this.state.items.filter(item => item.id !== id);
        const  ItemSelected = this.state.items.find(item => item.id === id);
        this.setState({
            items:ItemsFilters,
            item:ItemSelected.title,
            editItem:true,
            id:id

        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">
                            ToDo Input
                        </h3>
                        <ToDoInputs item={this.state.item} handleChange={this.handleChange}
                                    Additem={this.Additem}
                                    editItem={this.state.editItem}/>
                        <ToDoList items={this.state.items}
                                  cleraList={this.cleraList}
                                  deleteItems={this.deleteItems}
                                  editItems={this.editItems}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
