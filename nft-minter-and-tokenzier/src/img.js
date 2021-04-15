import './App.css';


import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';





class Img extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <div>

                <div class="card-body cardbody-length rounded" >
                    <img src="" id="blah" alt='' style={{ width: "100%", height: "100%" }}>
                    </img>
                </div>

            </div>
        );
    }
}

export default Img;