import React from 'react';
import NameList from './NameList'
import NameGen from './NameGen'

const MAX_RESULTS = 4;

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
        let url_value = this.state.value.replace(/\s/g, "+");


        const Http = new XMLHttpRequest();
        const url = `https://api.datamuse.com/words?ml=${this.state.value}&max=${MAX_RESULTS}`;
        Http.open("GET", url);
        Http.send();

        let array = [];

        Http.onload=(e) => {
            array = JSON.parse(Http.responseText);
            this.setState({
                ...this.state,
                names: array.map((x) => x.word),
            });
            console.log(this.state.names);
        }

        const champion_descriptors = ["obliterate", "god", "fallen", "sword", "brutal", "apocalypse", "vengeance", "wing"]
        console.log("Name gen testing");
        NameGen(champion_descriptors);
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
