import React from 'react';

export default class NameList extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                {this.props.names.map(name => <p>{name}</p>)}
            </div>
        );
    }
}