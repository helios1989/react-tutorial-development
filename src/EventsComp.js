// Normzliing Events with Reacts
import React from 'react';

class EventComp extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '---DD'};
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({currentEvent: e.type})
    }

    render() {
        return (
            <div>
                <textArea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update} 
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10"/>
                <h1>{this.state.currentEvent}</h1>
                    
            </div>
        )
    }
}

export default EventComp