import { useState } from "react";
import { IFile } from "../Interface";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderIcon from "./RenderIcon";
import { useAppDispatch } from "../redux/store";
import { setOpenFiles } from "../redux/feature/FileTreeSlice";
interface IProps {
  fileTree: IFile;
}
function ReculiveComponent({ fileTree }: IProps) {
  const [open, setOpen] = useState<boolean>(true);
  function toogle() {
    setOpen((prev) => !prev);
  }
  const dispatch = useAppDispatch();
  return (
    <div className=" mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1  w-fit" onClick={() => toogle()}>
        {fileTree.isFolder ? (
          <div className="flex items-center">
            {open ? <BottomArrowIcon /> : <RightArrowIcon />}{" "}
            <RenderIcon
              name={fileTree.name}
              isFolder={fileTree.isFolder}
              open={open}
            />
            <span className="ml-2">{fileTree.name}</span>
          </div>
        ) : (
          <>
            <RenderIcon name={fileTree.name} />
            <span
              className="ml-2"
              onClick={() => dispatch(setOpenFiles(fileTree))}
            >
              {fileTree.name}
            </span>
          </>
        )}
      </div>
      {open &&
        fileTree.children &&
        fileTree.children?.map((el, idx) => (
          <ReculiveComponent fileTree={el} key={idx} />
        ))}
    </div>
  );
}

export default ReculiveComponent;
