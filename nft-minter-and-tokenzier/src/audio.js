import './App.css';


import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';





class Audio extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div class="card-body cardbody-length rounded" >
                    <audio src="" id="blah" style={{ width: "100%", height: "100%" }} controls>
                        <source style={{ width: "100%", height: "100%" }} id="blah" src="" type="audio/mp3" />
                    </audio>
                </div>
            </div>
        );
    }
}

export default Audio;