import React from 'react';

// class Hello extends React.Component {
//     render() {
//         return React.createElement('h1', null, 'hello world')
//     }
// }
class Hello extends React.Component {
    constructor() {
        super();
        this.state= {
            txt: 'this is the state text'
        }
    }
    render() {
        // let txt = this.props.txt
        // return (
        // <div>
        //     <h1> Hello Series</h1>
        //     <b>bold</b>
        //     <span>{txt}</span>
        // </div>)
        return (
            <div>
                <input type="text" 
                onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
                <div>
                    Widget
                    <Widget update={this.update.bind(this)}/>
                </div>
            </div>
        )
    }

    update(e) {
        this.setState({txt: e.target.value})
    }
}

Hello.propTypes = {
    txt: ""
}

Hello.defaultProps = {
    txt: "This is the default txt"
}

const Widget = (props) =>
 <input type="text" onChange={props.update} />

export default Hello

