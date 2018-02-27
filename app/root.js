import Header from './components/header'
import Progress from './components/progress'
import React, { Component } from 'react';

export class Root extends Component {
	render() {
		return (
				<div>
    <Header></Header>
    <Progress 
         progress="2"
    >

    </Progress>
  	</div>
		);
	}
}





