// https://eth-goerli.g.alchemy.com/v2/9H6tHOzJYbNSUNvqUfMkfJnzAQmWKKFR

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9H6tHOzJYbNSUNvqUfMkfJnzAQmWKKFR',
      accounts: ['a6b6feb22db41d6e862c6f7b77cf25b95c385cf3b22033b94561730a41564f5d']
    }
  }
}
