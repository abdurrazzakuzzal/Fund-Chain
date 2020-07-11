const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'ski way betray glare come truly blush length help lab august vicious',
	'https://rinkeby.infura.io/v3/af89557a77394959b590fa385f325b65'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log(accounts);

	console.log(accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: '0x' +compiledFactory.bytecode })
		.send({from: accounts[0]});
		
		console.log('Contract deployed to',result.options.address);
};
deploy();