StableCoin Project
Overview
StableCoin is a decentralized application (dApp) that allows users to create and transfer a custom ERC-20 token named StableCoin (STC) on the Polygon network. The application integrates with a Flask backend and uses Infura for blockchain interactions.

Prerequisites
Node.js v14.0.0 or higher

npm (Node Package Manager)

Python 3.6 or higher

Flask

Metamask Wallet

Truffle

Ganache (for local development)

Setup and Installation
Backend (Flask)
Clone the Repository:

bash

Copy
git clone https://github.com/yourusername/stablecoin_project.git
cd stablecoin_project
Create a Virtual Environment:

bash

Copy
python -m venv venv
Activate the Virtual Environment:

On Windows:

bash

Copy
venv\Scripts\activate
On macOS/Linux:

bash

Copy
source venv/bin/activate
Install Dependencies:

bash

Copy
pip install -r requirements.txt
Configure Environment Variables: Create a .env file in the project root and add your environment variables:

env

Copy
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_secret_key
SQLALCHEMY_DATABASE_URI=sqlite:///stablecoin.db
Run Migrations:

bash

Copy
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
Start the Flask Server:

bash

Copy
flask run
Smart Contract (Truffle)
Navigate to the Truffle Directory:

bash

Copy
cd stablecoin_app
Install Node Dependencies:

bash

Copy
npm install
Install Truffle and HDWalletProvider:

bash

Copy
npm install -g truffle
npm install @truffle/hdwallet-provider
Update Truffle Configuration: In truffle-config.js, ensure you have the following configuration:

javascript

Copy
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = 'YOUR_INFURA_PROJECT_ID';
const mnemonic = 'YOUR_METAMASK_MNEMONIC';

module.exports = {
  networks: {
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-amoy.infura.io/v3/${infuraKey}`),
      network_id: 137,  // Polygon Mainnet ID
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 3000000,
      gasPrice: 100000000000  // 100 Gwei
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.infura.io/v3/${infuraKey}`),
      network_id: 80001,  // Polygon Mumbai Testnet ID
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 3000000,
      gasPrice: 100000000000  // 100 Gwei
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
Compile the Smart Contract:

bash

Copy
truffle compile
Deploy the Smart Contract:

bash

Copy
truffle migrate --network polygon
Integration with Flask
Update Flask with Contract Details:

After deploying the contract, update app.py with the contract ABI and address:

python

Copy
from web3 import Web3

infura_url = "https://polygon-amoy.infura.io/v3/YOUR_INFURA_PROJECT_ID"
web3 = Web3(Web3.HTTPProvider(infura_url))

contract_abi = [...]  # Copy the ABI from the JSON file here
contract_address = "0xYourDeployedContractAddress"
contract = web3.eth.contract(address=contract_address, abi=contract_abi)
Run Flask Application:

Start the Flask server:

bash

Copy
flask run
Usage
Register: Users can register by sending a POST request to /register with their username, email, and password.

Login: Users can log in by sending a POST request to /login with their email and password.

Create Token: Authenticated users can create tokens by sending a POST request to /create_token with the amount and recipient address.

Transfer Token: Authenticated users can transfer tokens by sending a POST request to /transfer_token with the amount and recipient address.

Contributing
Feel free to fork the repository, create a branch, and submit a pull request with your changes. Contributions are always welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
