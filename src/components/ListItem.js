import React, { Component, Fragment } from 'react';

class ListItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.item.name);
    }

    onDelete = () => {
        this.props.onUpdateStatus(this.props.item.name);
    }
  render(){
    return(
      <Fragment>
        <div onClick={this.onUpdateStatus} className={this.props.item.status ? "choice da-chon-0" : "choice"} >
            <div className="selected">
                <i className={this.props.item.status ? "fas fa-check select" : ""}></i>
            </div>
            <p className={this.props.item.status ? "da-chon" : ""}>{this.props.item.name}</p>
            <div className="ic-close"><i onClick={this.onDelete} className="fas fa-times close"></i></div>
        </div>
      </Fragment>
    );
  }
}

export default ListItem;