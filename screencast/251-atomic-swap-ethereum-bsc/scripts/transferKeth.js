module.exports = async callback => {
  await web3.eth.sendTransaction({
    from: '0xbad6112a29f80e0922994d6ddBd47b39eD31612C',
    to: '0xbad21c1193C715940e52B8d3Fe9C71BF174D4bDc',
    value: web3.utils.toWei('500', 'milli')
  });
  callback();
};
