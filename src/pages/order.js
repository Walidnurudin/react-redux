import React, { Component } from 'react'
import { connect } from 'react-redux';

class Order extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.handlePlus}>+</button>
                <button onClick={this.props.handleMinus}>-</button>
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

const mapDispatchToProps = dispatch => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_VALUE'}),
        handleMinus: () => dispatch({type: 'MINUS_VALUE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);