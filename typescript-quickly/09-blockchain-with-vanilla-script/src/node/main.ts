import { Blockchain } from 'lib/bc_transactions';

(async function main(): Promise<void> {
  console.log('Initializing the blockchain, creating the genesis block...');

  const bc = new Blockchain();
  await bc.createGenesisBlock();

  bc.createTranscation({sender:'John',recipient:'Kate',amount:15});
  bc.createTranscation({sender:'Gina',recipient:'Rick',amount:60});

  await bc.minePendingTranscations();

  console.log(JSON.stringify(bc, null, 2));

})();