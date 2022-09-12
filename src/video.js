import './App.css';


import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';





class Video extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div class="card-body cardbody-length rounded" >
                    <video src="" id="blah" style={{ width: "100%", height: "100%" }} controls>
                        <source style={{ width: "100%", height: "100%" }} id="blah" src="" type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }
}

export default Video;