import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser and metamask is running
	web3 = new Web3(global.window.web3.currentProvider);
}else{
	//we are on the server or metamask is not running
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/af89557a77394959b590fa385f325b65'
	);
	web3 = new Web3(provider);
}

export default web3;