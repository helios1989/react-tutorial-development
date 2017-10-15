import React from 'react';
import ReactDOM from 'react-dom';
//Control React Component Updates When New Props Are Received
class CompReact extends React.Component {
    constructor() {
        super();
        this.state = {increasing: false};
    }
    update() {
        ReactDOM.render(
            <CompReact val={this.props.val+1}/>,
            document.getElementById('CompReact')
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val %  5 === 0;
    }
    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
             </button>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}

CompReact.defaultProps = {val: 0}
export default CompReact