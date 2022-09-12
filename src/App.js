import './App.css';
import React, { Component } from 'react';
import Web3 from 'web3';
import Navbar from './Navbar.js';
import Main from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  loadEverything = async () => {

    await this.loadWeb3()
    await this.loadBlockchainData()
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
      const ethBalfromWei = await web3.utils.fromWei(this.state.ethBalance, 'Ether')
      this.setState({ ethBalfromWei: ethBalfromWei })

      let networkID = await web3.eth.net.getId()
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
      this.setState({ networkID: networkID })
    }
    else {
      window.alert('Non-Ethereum browser detected. Please install metamask chrome extension and refresh page')
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      networkID: '',
      trxhash: '',
      ethBalance: '0',
      ethBalfromWei: '0'
    }
  }

  render() {
    let content
    content = <Main
      ethBalfromWei={this.state.ethBalfromWei}
      FireTokenBalanceFromWei={this.state.FireTokenBalanceFromWei}
      userfiretokeninvault={this.state.userfiretokeninvault}
      vaultdeposit={this.vaultdeposit} />

    return (
      <div>
        <div>
          <Navbar account={this.state.account}
            loadEverything={this.loadEverything}
            cashback={this.cashback}
            FireTokenBalanceFromWei={this.state.FireTokenBalanceFromWei}
          />
          <header className="App-header">
            <main role='main' className='col-lg-12 d-flex ml-auto mr-auto' style={{ maxWidth: '600px' }}></main>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>

          </header>
          {content}
        </div>
      </div>
    );

  }
}

export default App;

