import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Item from './components/ListItem';
import _ from "lodash";

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList: [
        
      ]
    }
  }

  onUpdateStatus = (name) => {
    var {todoList} = this.state;
    let a = _.findIndex(this.state.todoList, { 'name': name });
    if (a!== -1){
      todoList[a].status = !todoList[a].status
      this.setState({todoList: todoList})
    }
  }

  onDelete = (name) => {
    console.log(name);  
    var {todoList} = this.state;
    todoList = _.remove(this.state.todoList, { 'name': name });
    this.setState({todoList: todoList})
  }

  addTask = (object) => {
    this.state.todoList.push(object);
    this.setState({ todoList: this.state.todoList })
  }
  render(){
    let item = this.state.todoList.map((item,index) => {
      return <Item key={index} 
                   item={item}
                   onUpdateStatus = {this.onUpdateStatus}
                   onDelete = {this.onDelete}
             />
    })
    return(
      <Fragment>
          <div id="container">
            <div id="header">
                <Header addTask={this.addTask}/>
            </div>
            <div id="wp-content">
                {item}
            </div>
          </div>
      </Fragment>
    );
  }
}
// import React, { Component, Fragment } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//       name: '',
//       first_name: '',
//       last_name: '',
//       full_name:''
//     }
//   }

//   changeCount() {
//     this.setState({
//       count: this.state.count + 1
//     })  
//   }
  
//   componentDidMount() {
//     this.changeCount();
//   }

//   onchange = (e) => {
//     this.setState({
//       name: e.target.value
//     }) 
//   }

//   onClick = () => {
//     this.changeCount();
//   }

//   setName = (e) => {
//     this.setState({
//       first_name: e.target.value,
//     })
//   }

//   setFullName = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     })
//   }
  
//   fullName = () => {
//     var {first_name, last_name} = this.state;
//     this.setState({
//       fullName: `${first_name} ${last_name}`
//     })
//   }

//   submit = (e) => {
//     e.preventDefault();
//     this.fullName();
//   }

//   render(){
//     var { count, name, first_name, last_name } = this.state;
//     let array = ['A', 'B', 'C', 'D']
//     var listData = array.map((data, index) => {
//       return <Item data={data} key={index} />
//     })
//     return (
//       <Fragment>
//           {/* <input value={name} onChange={this.onchange}></input> */}
//           <h1>{count}</h1>
//           <h1>{name}</h1>
//           <form onSubmit={this.submit}>
//             <label>First Name: </label>
//             <input name="first_name" value={first_name} onChange={this.setFullName}></input>
//             <label>Last Name: </label>
//             <input name="last_name" value={last_name} onChange={this.setFullName}></input>
//             {/* <button onClick={this.onClick} type="button" className="btn btn-default">+</button> */}
            
//             <button onClick={this.fullName} type="submit" className="btn btn-default">button</button>
//           </form>
//           <p>{this.state.fullName}</p>
//           <ul>
//             {listData}
//           </ul> 
//       </Fragment>
//     );
//   }
// }
// class Item extends Component{
//   render(){
//     return(
//       <li key={this.props.key}>
//           {this.props.data}
//       </li>
//     )
//   }
// }

export default App;
