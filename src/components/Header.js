import React, { Component, Fragment } from 'react';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      status: false
    }
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({[name]: value})
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state)
    this.setState({name: ''})
  }
  render(){
    return(
      <Fragment>
            <h2>Danh sách những việc cần làm trong năm</h2>
            <form onSubmit={this.onSubmit}>
                <input type="text" name="search" id="title" name="name" value={this.state.name} title="ttsearch" placeholder="Title..." onChange={this.onChange}/>
                <button type="submit">Thêm</button>
            </form>
      </Fragment>
    );
  }
}

export default Header;