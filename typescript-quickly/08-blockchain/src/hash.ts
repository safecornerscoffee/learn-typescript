let nonce = 0;

const generateHash = async (input: string): Promise<string> => {
  const algorithm = 'SHA-256';
  const data: Uint8Array = new TextEncoder().encode(input);
  const hashBuffer: ArrayBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray: number[] = Array.from(new Uint8Array(hashBuffer));
  const hash: string = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hash;
}

const calculatehashWithNonce = async (nonce: number): Promise<string> => {
  const data = 'Hello World' + nonce;
  return generateHash(data);
}

const mine = async (): Promise<void> => {
  let hash: string;
  do {
    hash = await calculatehashWithNonce(++nonce);
  } while (hash.startsWith('0000') === false);
  console.log(`Hash: ${hash}, nonce = ${nonce}`);
}

mine();
