import React, { Component } from 'react'
import { connect } from 'react-redux';

class Order extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button>+</button>
                <h1>Hasil : {this.props.order}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.value
    }
}

export default connect(mapStateToProps)(Order);