import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class HDNode extends Component {
  componentDidMount() {
    document.title = "HDNode - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      // getCashAddress
      // nextChainAddress
      <div className="HDNode">
        <h2 id='HDNode' className="content-head is-center"><i className="fas fa-code-branch" /> HDNode</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/hdnode">HDNode</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='fromSeedBuffer'><code>fromSeedBuffer</code></h3>
            <p>
          Create HDNode from Seed Buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          rootSeed <code>Buffer</code>   root seed buffer
              </li>
              <li>
          network <code>string</code>    optional network. default: 'bitcoin'
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
            `}</SyntaxHighlighter>

            <h3 id='fromSeedHex'><code>fromSeedHex</code></h3>
            <p>
          Create HDNode from Seed Hex
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          rootSeed <code>string</code>:   root seed hex
              </li>
              <li>
          network <code>string</code>:    optional network. default: 'bitcoin'
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // generate entropy
    let mnemonic =  BITBOX.Mnemonic.generateMnemonic(128)
    // create seed hex from mnemonic
    let seedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(seedHex)

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed hex from mnemonic
    let seedHex = BITBOX.Mnemonic.mnemonicToSeedHex(mnemonic);
    // create HDNode from seed hex
    let hdNode = BITBOX.HDNode.fromSeedHex(seedHex)
            `}</SyntaxHighlighter>

            <h3 id='derive'><code>derive</code></h3>
            <p>
          Derive non hardened child HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          num <code>number</code>: number of child node. Ex: 0
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive unhardened child HDNode
    let childNode = hdNode.derive(0);
            `}</SyntaxHighlighter>

            <h3 id='deriveHardened'><code>deriveHardened</code></h3>
            <p>
          Derive hardened child HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          num <code>number</code>: number of child node. Ex: 0
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive hardened child HDNode
    let childNode = hdNode.deriveHardened(0);
            `}</SyntaxHighlighter>

            <h3 id='derivePath'><code>derivePath</code></h3>
            <p>
          Derive child HDNode from path
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          path <code>string</code>: path of child hd node. Ex: "m/44'/145'/0'"
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          HDNode                 HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // derive hardened child HDNode
    let childNode = hdNode.derivePath("m/44'/145'/0'");
            `}</SyntaxHighlighter>

            <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
            <p>
          Get legacy address of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            legacyAddress <code>string</code>:     legacy base58check encoded address of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to legacy address
    let address = BITBOX.HDNode.toLegacyAddress(hdNode);
    // 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toLegacyAddress(hdNode);
    // 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi
            `}</SyntaxHighlighter>

            <h3 id='toCashAddress'><code>toCashAddress</code></h3>
            <p>
          Get cash address of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            cashAddress <code>string</code>:     cashaddr encoded address of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toCashAddress(hdNode);
    // bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to cash address
    let address = BITBOX.HDNode.toCashAddress(hdNode);
    // bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt
            `}</SyntaxHighlighter>

            <h3 id='toWIF'><code>toWIF</code></h3>
            <p>
          Get private key in wallet import format (WIF) of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            privateKeyWIF <code>string</code>:     private key in wallet import format (WIF) of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to WIF
    let privateKeyWIF = BITBOX.HDNode.toWIF(hdNode);
    // L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to WIF
    let privateKeyWIF = BITBOX.HDNode.toWIF(hdNode);
    // KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ
            `}</SyntaxHighlighter>

            <h3 id='toXPub'><code>toXPub</code></h3>
            <p>
            Get extended public key of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            xpub <code>string</code>:     extended public key of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended public key
    let xpub = BITBOX.HDNode.toXPub(hdNode);
    // xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended public key
    let xpub = BITBOX.HDNode.toXPub(hdNode);
    // xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ
            `}</SyntaxHighlighter>

            <h3 id='toXPriv'><code>toXPriv</code></h3>
            <p>
            Get extended private key of HDNode
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNode: HDNode
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            xpriv <code>string</code>:     extended private key of HDNode
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended private key
    let xpriv = BITBOX.HDNode.toXPriv(hdNode);
    // xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

    // generate entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // create mnemonic from entropy
    let mnemonic = BITBOX.Mnemonic.entropyToMnemonic(entropy);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create HDNode from seed buffer
    let hdNode = BITBOX.HDNode.fromSeedBuffer(seedBuffer);
    // to extended private key
    let xpriv = BITBOX.HDNode.toXPriv(hdNode);
    // xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v
            `}</SyntaxHighlighter>

            <h3 id='fromXPriv'><code>fromXPriv</code></h3>
            <p>
            Generate HDNode from extended private key
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            xpriv: extended private key
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hdNode <code>HDNode</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create hdNode from xpriv
    let hdNode = BITBOX.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

    // again
    let hdNode = BITBOX.HDNode.fromXPriv('xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv');
            `}</SyntaxHighlighter>

            <h3 id='fromXPub'><code>fromXPub</code></h3>
            <p>
            Generate HDNode from extended public key
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            xpub: extended public key
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            hdNode <code>HDNode</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create hdNode from xpub
    let hdNode = BITBOX.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

    // again
    let hdNode = BITBOX.HDNode.fromXPub('xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn');
            `}</SyntaxHighlighter>

          <h3 id='fromWIF'><code>fromWIF</code></h3>
          <p>
          Generates an ECPair from a private key in wallet import format. Can generate addresses as well as sign messages and transactions. Can&rsquo;t derive child HDNodes.
          </p>
          <h4>Arguments</h4>
          <ol>
            <li>
        xpub <code>string</code>:                 extended public key to be used
            </li>
            <li>
        path <code>string</code> <code>optional</code>:       derivation path of external change address. Default is <code>0/0</code>
            </li>
          </ol>
          <h4>Result</h4>
          <p>
        changeAddress <code>string</code>:      cashaddr encoded change address
          </p>
          <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // mainnet WIF
    let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
    let ecpair = BITBOX.HDNode.fromWIF(wif);

    // get cashaddr
    BITBOX.HDNode.getCashAddress(ecpair)
    // bitcoincash:qrlwe36jtawauv24jnvjdcdcja5tapvvm5m3rnksz7

    // get legacy addr
    BITBOX.HDNode.getLegacyAddress(ecpair)
    // 1QEvHPehayiuPnggPFsGYTmpZSPAnJpDG8

    // mainnet WIF again
    let wif = 'Kwpd21tPMtWy24WKmBuLc295fw63C2if16fzb3k6wyB8yTeABAAg'
    let ecpair = BITBOX.HDNode.fromWIF(wif)

    BITBOX.HDNode.getCashAddress(ecpair)
    // bitcoincash:qznln6jzydykmlvrzcwhu63s6ce8lh227vfnydhnsx

    BITBOX.HDNode.getLegacyAddress(ecpair)
    // 1GKBESUjcyBPLDMuHTdBvnypB9DVETFnL1
          `}</SyntaxHighlighter>

            <h3 id='createAccount'><code>createAccount</code></h3>
            <p>
            Create <a href='https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#the-default-wallet-layout'>BIP32</a> account. Has `getChainAddress` and `nextChainAddress` helper methods.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
            hdNodes: Array of HDNodes
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            account
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
            `}</SyntaxHighlighter>

            <h3 id='getChainAddress'><code>getChainAddress</code></h3>
            <p>
            Returns the latest address from account
            </p>
            <h4>Result</h4>
            <p>
            address
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
    account.getChainAddress(0)
    // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr
            `}</SyntaxHighlighter>

            <h3 id='nextChainAddress'><code>nextChainAddress</code></h3>
            <p>
            Moves the most recent address forward for account
            </p>
            <h4>Result</h4>
            <p>
            address
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // create mnemonic
    let mnemonic = BITBOX.Mnemonic.generateMnemonic(128);
    // create root seed buffer
    let rootSeedBuffer = BITBOX.Mnemonic.mnemonicToSeedBuffer(mnemonic);
    // create master hd node
    let masterHDNode = BITBOX.HDNode.fromSeedBuffer(rootSeedBuffer);
    // derive child node
    let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
    // create account
    let account = BITBOX.HDNode.createAccount([childNode]);
    account.getChainAddress(0)
    // 1EsibxXqzxzcor7eS34dSGrZp1kb3nQFFr
    account.nextChainAddress(0)
    account.getChainAddress(0)
    // 1JBApcAMD3riimPxABg2pNvwLumP9DEpxD
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default HDNode;
