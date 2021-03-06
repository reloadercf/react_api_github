import React, { Component } from 'react';
import axios from 'axios';
import resp from 'resp';

class Form extends Component {
    state = { userName:''}
    handleSubmit=(event)=>{

  event.preventDefault();
  console.log('Event: Form Submit', this.state.userName);
  axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp=>{
          this.props.onSubmit(resp.data);
          this.setState({userName:''});
      })
};

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                      value={this.state.userName}
                      onChange={(event)=> this.setState({userName:event.target.value})}
                      placeholder="Algo"/>
                    <button>Add card </button>
                </form>
            </div>
        );
    }
}

export default Form;
