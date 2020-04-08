export function make_array(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

export function join(arr, spliter = '\n') {
  return (arr || []).join(spliter);
}

export function last(arr, n = 1) {
  return arr[arr.length - n];
}

export function first(arr) {
  return arr[0];
}

export function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export function shuffle(arr) {
  let ret = Array.from ? Array.from(arr) : arr.slice();
  let m = arr.length;
  while (m) {
    let i = ~~(Math.random() * m--);
    let t = ret[m];
    ret[m] = ret[i];
    ret[i] = t;
  }
  return ret;
}

export function flat_map(arr, fn) {
  if (Array.prototype.flatMap) return arr.flatMap(fn);
  return arr.reduce((acc, x) => acc.concat(fn(x)), []);
}

export function remove_empty_values(arr) {
  return arr.filter(v => (
    v !== undefined &&
    v !== null &&
    String(v).trim().length
  ));
}
