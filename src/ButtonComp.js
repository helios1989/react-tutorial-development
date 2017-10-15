//Access Nested Data with React
import React from 'react';

class ButtonComp extends React.Component {
    render() {
        return (
            <div>
            <Button>i<Heart/>Reat</Button> 
            <Title text="1234"/>
        </div>
        )
    }
}

const Button = (props) =><button>{props.children}</button>
//Add custom propTYpe Validation
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTpes = {
    text(props, propName, component) {
        if(!(propName in props)) {
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6) {
            console.log('data');
            return new Error(`${propName}`)
        }else {
            console.log('im ok');
        }
    }
}

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

export default ButtonComp