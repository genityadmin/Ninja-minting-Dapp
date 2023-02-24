import '../styles/global.css';
import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import CountDown from './react/CountDown';
import ReactGA from 'react-ga4';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactGA.initialize('G-9T29FCT0HN');

  ReactDOM.render(<>
    <CountDown />
    {/* <Dapp /> */}
  </>, document.getElementById('minting-dapp'));
});
