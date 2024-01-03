
let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

export function generateString(size) {
  let str = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i++) {
    str += Math.floor(Math.random() * chars.length);
  }
  return str;
}