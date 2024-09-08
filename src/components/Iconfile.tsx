import { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}
function Iconfile({ className = "w-5 h-5", ...rest }: IProps) {
  return <img {...rest} alt="Icon" className={className} />;
}

export default Iconfile;
