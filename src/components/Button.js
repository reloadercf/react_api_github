import React,{Component} from 'react';

class Button extends Component{

	handleClick = () => {
			this.props.onClickFuntion (this.props.incrementValue);
		}


	render() {
		return(
			<button
			onClick={this.handleClick}>+{this.props.incrementValue}</button>
			);
		}
}

export default Button;
