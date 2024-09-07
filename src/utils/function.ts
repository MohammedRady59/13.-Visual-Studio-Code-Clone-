import { IFile } from "../Interface";

export function preventDuplicate(tap: IFile[], open: IFile) {
  const exist = tap.find((el) => el.id === open.id);
  if (exist) return tap;
  return [...tap, open];
}
