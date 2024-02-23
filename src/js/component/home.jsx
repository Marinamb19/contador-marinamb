import React from "react";

//include images into your bundle


//create your first component
const SimpleCounter = (props) => {
	return <div className="Counter">
	<div className="clock"><img className="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKo3FjzzsjnIuzlslX4u93LkbPm7Y-UzUouyPTOY6RQ&s"/></div>
	<div className="six">{props.digitSix % 10}</div>
	<div className="five">{props.digitFive % 10}</div>
	<div className="four">{props.digitFour % 10}</div>
	<div className="three">{props.digitThree % 10}</div>
	<div className="two">{props.digitTwo % 10}</div>
	<div className="one">{props.digitOne % 10}</div>
</div>
	
};

export default SimpleCounter;
