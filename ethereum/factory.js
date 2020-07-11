import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x83ad6a38Bf72bb3d3DA6b23dBF00EcB7231f05D9'
);

export default instance;
