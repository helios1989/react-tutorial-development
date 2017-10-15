import React from 'react';
import ReactDOM from 'react-dom';
// when react remove from the dom it is called unmountain
// when react move from the dom it is called mountain

class LifeCycleComp extends React.Component {
    constructor() {
        super(); // to get the context
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({val: this.state.val + 1})
    }
    componentWillMount() {
        console.log('component will mount');
    }
    render() {
        console.log('render');
        return (
        <button onClick={this.update}>{this.state.val}</button>
        )
    }
    componentDidMount() {
        console.log('compnent did mount');
    }
    componentWillUnmount() {
        console.log('compnent will unmount');
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<LifeCycleComp />, document.getElementById('Life'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('Life'));
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
            </div>
        )
    }
}

export default Wrapper;