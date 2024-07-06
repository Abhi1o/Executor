interface ChainConfig {
    rpcEndpoint: string;
    prefix: string;
    denom: string;
    feeAmount: string;
    gas: string;
  }
  
  const chainConfig: ChainConfig = {
    rpcEndpoint: 'http://localhost:8080',
    prefix: 'cosmos',
    denom: 'uatom', // smallest unit of ATOM
    feeAmount: '10000', // in uatom
    gas: '200000'
  };
  
  export default chainConfig;