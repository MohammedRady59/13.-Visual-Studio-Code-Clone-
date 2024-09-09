import { X } from "lucide-react";
import { IFile } from "../Interface";
import RenderIcon from "./RenderIcon";
import { RootState, useAppDispatch } from "../redux/store";
import {
  activeTap,
  closeTap,
  setClickedFile,
} from "../redux/feature/FileTreeSlice";
import { useSelector } from "react-redux";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  file: IFile;
}
function Tap({ file, ...rest }: IProps) {
  const { active } = useSelector((state: RootState) => state.treeFile);

  const dispatch = useAppDispatch();

  function handleClickFile() {
    dispatch(
      setClickedFile({ filename: file.name, filecontent: file.content })
    );
    dispatch(activeTap(file.id));
  }
  return (
    <div
      className={`flex items-center  ${
        active === file.id
          ? "border-t-2 border-[#cf6ccf]"
          : "border-t-2 border-transparent"
      }`}
      {...rest}
    >
      <RenderIcon name={file.name} />
      <span
        className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md"
        onClick={handleClickFile}
      >
        {file.name}
      </span>
      <span
        onClick={() => dispatch(closeTap(file))}
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
      >
        <X />
      </span>
    </div>
  );
}

export default Tap;
