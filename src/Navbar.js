import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';

class Navbar extends Component {

  async loadBlockchainData() {
    const web3 = window.web3
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })


      const ethBalance = await web3.eth.getBalance(this.state.account)
      this.setState({ ethBalance: ethBalance })

      const networkID = await web3.eth.net.getId()
      console.log(networkID)
      this.setState({ networkID: networkID })
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })


      const ethBalance = await web3.eth.getBalance(this.state.account)
      this.setState({ ethBalance: ethBalance })

      const networkID = await web3.eth.net.getId()
      console.log(networkID)
      this.setState({ networkID: networkID })
    }
    else {
      window.alert('Non-Ethereum browser detected. Please install metamask chrome extension and refresh page')
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      networkID: '',
      ethBalance: ''
    }

  }

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow" style={{ padding: '5px', height: '10%' }}>
        <a
          className='navbar-brand col-sm-3 col-md-2 mr-0'
          target='blank'
          rel='noopener noreferrer'
        > NFT MINTER DAPP
        </a>
        <button className='btn btn-primary ' style={{ position: 'absolute', left: '70%' }} onClick={(event) => {
          event.preventDefault()
          this.loadBlockchainData()
          this.loadWeb3()
          this.props.loadEverything()
        }}> connect wallet </button>





        <ul className='nav-bar-nav px-3 mt-2'>
          <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
            <small className='text-secondary'>
              <small id="account" style={{ color: "white" }}> {this.state.account} </small>
            </small>


          </li>
          <span style={{ color: "white" }}>
            <small >
              FT
           </small>
          </span>

        </ul>




      </nav>
    );
  }
}

export default Navbar;
