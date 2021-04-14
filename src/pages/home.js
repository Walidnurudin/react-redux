import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hasil : {this.props.value}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.value,
    }
}

export default connect(mapStateToProps)(Home)