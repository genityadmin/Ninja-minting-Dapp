import React from 'react';
import Whitelist from '../lib/Whitelist';

interface Props {
  userAddress: string | null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {
}

const defaultState: State = {
};



export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut;
  }


  render() {
    return (
      <>
        <div className="wallet-address">
          <span className="address">{this.props.userAddress?.toString().slice(0, 5)}...{this.props.userAddress?.toString().slice(-4)}</span>
        </div>
        {this.props.isUserInWhitelist ?
          <>
            <h1 className='select'>SELECT THE NUMBER OF NINJAS TO MINT</h1>
            <div className="supply">
              <span className="label">REMAINING NINJAS: </span>
              <span style={{ color: "#E42222" }}>{this.props.totalSupply.toString()}</span> / {this.props.maxSupply.toString()} SUPPLY
            </div>
          </>
          :
          null
        }
        {this.isSaleOpen() ?
          <>
            {this.props.isWhitelistMintEnabled && !this.props.isUserInWhitelist ? <h1 className='WL-fail'><strong className='text'>Oops! It seems like you are not on the Ninja List. Hope to see you at the General Mint Soon!</strong></h1> : null}
          </>
          :
          null
        }
      </>
    );
  }
}


