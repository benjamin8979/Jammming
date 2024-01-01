
let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}