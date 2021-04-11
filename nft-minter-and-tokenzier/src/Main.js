import './App.css';


import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';





class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'img' };

        this.handleChange = this.handleChange.bind(this);
   
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }







    render() {
        let content
        if (this.state.vault === true) {

        } else {

        }

        return (
            <div>



                <head>

                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css "

                        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />



                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet" />

                    <title>NFT MINTER</title>
                </head>




                <body class="body">



                    <div class="intro-text ">
                        <h1>NFT MINTER CONTRACT</h1>
                        <p> tokenize any media you want and save it on the chain for life!</p>
                    </div>







                    <div class="row roww" >
                        <div class="col-sm-6  ">
                            <div class=" add-file rounded">
                                <div class="addfile-content">

                                    <div className='file-type-menu'>

                                        <form onSubmit={this.handleSubmit}>
                                            <label>
                                                select file type
                                            </label>
                                            <br></br>
                                            <select value={this.state.value} onChange={this.handleChange}>
                                                    <option value="img"> img</option>
                                                    <option value="audio">audio</option>
                                                    <option value="video">video</option>
                                                    <option value="other">other</option>
                                            </select>
                                            
                                        </form>
                                    </div>


                                    < div className='input-file'>
                                        <p>add file </p>
                                        <input type='file' onchange="readURL(this);" />
                                    </ div>


                                </div>



                            </div>
                        </div>
                        <div class="col-sm-6 "   >


                            <div class="card-body cardbody-length rounded" >

                                <video src="" id="blah" style={{ width: "100%", height: "100%" }} controls>
                                    <source style={{ width: "100%", height: "100%" }} id="blah" src="" type="video/mp4" />
                                </video>
                            </div>



                        </div>


                    </div>
                    <button class="btn btn-primary mint"> MINT</button>







                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                        crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                        crossorigin="anonymous"></script>
                </body>


            </div>
        );
    }
}

export default Main;
