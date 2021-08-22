import { sha256 } from './universal_sha256';

export interface Transcation {
  readonly sender: string;
  readonly recipient: string;
  readonly amount: number;
}

export class Block {
  nonce: number = 0;
  hash: string = "";
  
  constructor(
    readonly previousHash: string,
    readonly timestamp: number,
    readonly transcations: Transcation[]
  ) {}

  private async calculateHash(nonce: number): Promise<string> {
    const data = this.previousHash + this.timestamp + JSON.stringify(this.transcations) + nonce;
    return sha256(data);
  }

  async mine(): Promise<void> {
    do {
      this.hash = await this.calculateHash(++this.nonce);
    } while(this.hash.startsWith('0000') === false)
  }
}

export class Blockchain {
  private readonly _chain:Block[] = [];
  private _pendingTranscations: Transcation[] = [];

  private get latestBlock(): Block {
    return this._chain[this._chain.length - 1];
  }

  get chain(): Block[] {
    return [... this._chain];
  }
  get pendingTranscations(): Transcation[] {
    return [... this._pendingTranscations];
  }

  async createGenesisBlock():Promise<void> {
    const genesisBlock = new Block('0', Date.now(), []);
    await genesisBlock.mine();
    this._chain.push(genesisBlock);
  }

  createTranscation(transcation: Transcation): void {
    this._pendingTranscations.push(transcation);
  }

  async minePendingTranscations(): Promise<void> {
    const block = new Block(this.latestBlock.hash, Date.now(), this._pendingTranscations);
    await block.mine();
    this._chain.push(block);
    this._pendingTranscations = [];
  }
}
