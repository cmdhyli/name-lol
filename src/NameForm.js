import React from 'react';
import NameList from './NameList'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: 'Enter a name',
            names: [],
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.setState({
            ...this.state,
            names: ['xd', 'hi']
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:

                        <input type="text" value={this.state.value} onChange={this.handleChange}  placeholder={this.state.placeholder}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <NameList names={this.state.names} />
            </div>
        );
    }
}

export default NameForm;
