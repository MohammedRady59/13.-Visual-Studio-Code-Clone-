import { IFile } from "../Interface";
import RenderIcon from "./RenderIcon";

interface IProps {
  file: IFile;
}

function Tap({ file }: IProps) {
  return (
    <div className="flex  items-center">
      <RenderIcon name={file.name} />

      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {file.name}
      </span>
    </div>
  );
}

export default Tap;
