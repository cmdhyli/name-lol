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
        const Http = new XMLHttpRequest();
        const url = `https://api.datamuse.com/words?ml=${this.state.value}&max=4`;
        Http.open("GET", url);
        Http.send();

        let array = [];

        Http.onreadystatechange=(e) => {
            let obj_str = Http.responseText;
            console.log('response', obj_str);
            let obj = JSON.parse('[{"word":"msdf","score":15001,"tags":["n","prop"]},{"word":"sdf","score":15001,"tags":["n","prop"]},{"word":"gsdf","score":14999,"tags":["n","prop"]}]');
            console.log('[{"word":"msdf","score":15001,"tags":["n","prop"]},{"word":"sdf","score":15001,"tags":["n","prop"]},{"word":"gsdf","score":14999,"tags":["n","prop"]}]' == Http.responseText);
            // let obj = JSON.parse(obj_str);
            // console.log('obj', obj);
        }


        this.setState({
            ...this.state,
            names: ['xd', 'hi']
        });
        event.preventDefault();
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
