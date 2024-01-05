
// Generate a random ID
// Used for testing
let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

// Generate a random string
// Used to create state for s\Spotify access token request
export function generateString(size) {
  let str = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i++) {
    str += Math.floor(Math.random() * chars.length);
  }
  return str;
}