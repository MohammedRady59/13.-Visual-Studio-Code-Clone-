import { IFile } from "../Interface";

export function preventDuplicate(tap: IFile[], open: IFile) {
  const exist = tap.find((el) => el.id === open.id);
  if (exist) return tap;
  return [...tap, open];
}

export function remove(tap: IFile[], open: IFile) {
  return tap.filter((el) => el.id !== open.id);
}

export function randomId(tap: IFile[]) {
  if (tap.length > 0) {
    return tap[0].id || null;
  }
  return null;
}
