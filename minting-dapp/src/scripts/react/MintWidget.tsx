import { utils, BigNumber } from 'ethers';
import React from 'react';
import NetworkConfigInterface from '../../../../smart-contract/lib/NetworkConfigInterface';
import $ from "jquery";

interface Props {
  networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  mintTokens(mintAmount: number): Promise<void>;
  whitelistMintTokens(mintAmount: number): Promise<void>;
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private mint3(): void {
    this.setState({
      mintAmount: 3,
    });
  }

  private mint2(): void {
    this.setState({
      mintAmount: 2,
    });
  }

  private mint1(): void {
    this.setState({
      mintAmount: 1,
    });
  }

  private async mint(): Promise<void> {
    // await this.props.whitelistMintTokens(this.state.mintAmount);
    await this.props.mintTokens(this.state.mintAmount);
  }

  render() {
    $('.color_red').on('click', function () {
      $('button').removeClass('selected');
      $(this).addClass('selected');
    });
    return (
      <>
        {this.canMint() ?
          <>
            {/* this.props.isUserInWhitelist ?
              <> */}
            <div className="pricetag">
              <strong>PRICE:</strong> {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} ETH
            </div>
            <div className="controls">
              {/*<button className="mintOne color_red" disabled={this.props.loading} onClick={() => this.mint1()}><a>1</a></button>
                  <button className="mintTwo color_red" disabled={this.props.loading} onClick={() => this.mint2()}>2</button>*/}


              <button className="mintOne-public color_red" disabled={this.props.loading} onClick={() => this.mint1()}><a>1</a></button>
              <button className="mintTwo-public color_red" disabled={this.props.loading} onClick={() => this.mint2()}>2</button>
              <button className="mintThree-public color_red" disabled={this.props.loading} onClick={() => this.mint3()}>3</button>


            </div>
            <button className="mintbutton" disabled={this.props.loading} onClick={() => this.mint()}>MINT {this.state.mintAmount} NINJAS</button>
          </>
          :
          null
          //    }
          //  </>
          //  :
          //  null
        }
      </>
    );
  }
}
