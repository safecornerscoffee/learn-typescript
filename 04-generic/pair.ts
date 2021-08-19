interface Pair<K, V> {
  key: K;
  value: V;

}

function compare<K, V>(pair1: Pair<K,V>, pair2: Pair<K, V>): boolean {
  return pair1.key === pair2.key && pair1.value === pair2.value;
}



