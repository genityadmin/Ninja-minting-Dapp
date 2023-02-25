import '../styles/global.css';
import ReactDOM from 'react-dom';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import Switcher from './react/Switcher';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<>

    <Switcher />

  </>, document.getElementById('minting-dapp'));
});
