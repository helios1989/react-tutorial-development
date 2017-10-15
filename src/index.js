import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './Hello';
import ButtonComp from './ButtonComp';
import EventComp from './EventsComp';
import RefComp from './RefComp';
import LifeCycleComp from './LifeCycleComp';
import CompReact from './CompReact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Hello txt="this is a props"/>, document.getElementById('hello'));
ReactDOM.render(<ButtonComp/>, document.getElementById("buttonComp"));
ReactDOM.render(<EventComp/>,document.getElementById("EventComp"));
ReactDOM.render(<RefComp/>,document.getElementById("RefComp"));
ReactDOM.render(<LifeCycleComp/>, document.getElementById("Life"));
ReactDOM.render(<CompReact />, document.getElementById("CompReact"));
registerServiceWorker();

