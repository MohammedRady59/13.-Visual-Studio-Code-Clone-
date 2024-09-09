import Iconfile from "./Iconfile";
import FileIcon from "./SVG/FileIcon";

interface IProps {
  name: string;
  isFolder?: boolean;
  open?: boolean;
}
function RenderIcon({ name, isFolder, open }: IProps) {
  const ext = name.split(".").pop();

  /* File */
  if (ext === "js") return <Iconfile src="/icons/javascript.svg" />;
  if (ext === "ts") return <Iconfile src="/icons/typescript.svg" />;
  if (ext === "tsx") return <Iconfile src="/icons/react_ts.svg" />;
  if (ext === "jsx") return <Iconfile src="/icons/react.svg" />;
  if (ext === "html") return <Iconfile src="/icons/html.svg" />;
  if (ext === "json") return <Iconfile src="/icons/jsconfig.svg" />;
  /* Folders */
  if (ext === "node_modules" && isFolder)
    return open ? (
      <Iconfile src="/icons/folder-node-open.svg" />
    ) : (
      <Iconfile src="/icons/folder-node.svg" />
    );
  if (ext === "public" && isFolder)
    return open ? (
      <Iconfile src="/icons/folder-public-open.svg" />
    ) : (
      <Iconfile src="/icons/folder-public.svg" />
    );
  if (ext === "src" && isFolder)
    return open ? (
      <Iconfile src="/icons/folder-src-open.svg" />
    ) : (
      <Iconfile src="/icons/folder-src.svg" />
    );
  if (ext === "components" && isFolder)
    return open ? (
      <Iconfile src="/icons/folder-components-open.svg" />
    ) : (
      <Iconfile src="/icons/folder-components.svg" />
    );

  if (isFolder && open)
    return <Iconfile src="/icons/folder-default-open.svg" />;
  if (isFolder && !open) return <Iconfile src="/icons/folder-default.svg" />;
  return <FileIcon />;
}

export default RenderIcon;
