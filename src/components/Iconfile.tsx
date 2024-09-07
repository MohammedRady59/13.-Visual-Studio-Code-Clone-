import { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {}
function Iconfile({ ...rest }: IProps) {
  return <img {...rest} alt="Icon" className="w-5 h-5" />;
}

export default Iconfile;
