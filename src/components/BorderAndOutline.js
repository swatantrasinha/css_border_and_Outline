import React, { Component } from 'react'
import './BorderAndOutline.style.css';

class BorderAndOutline extends Component {
    render() {
        return (
            <div className="container-box">
                <div className="box box-1">BOX 1</div>
                <div className="box box-2">BOX 2</div>
                <div className="box box-3">BOX 3</div>
                <div className="box box-4">BOX 4</div>
                <div className="box box-5">BOX 5</div>
            </div>
        )
    }
}

export default BorderAndOutline;