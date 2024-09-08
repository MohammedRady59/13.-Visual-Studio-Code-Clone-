import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Tap from "./Tap";
import Higlight from "./Higlight";
import Iconfile from "./Iconfile";

function OpenTab() {
  const { tapOpen, clicked } = useSelector(
    (state: RootState) => state.treeFile
  );
  return (
    <>
      {tapOpen.length == 0 ? (
        <div className="flex  h-screen items-center justify-center p-2 gap-4">
          <Iconfile src="/icons/vscode.svg" className="w-64 h-64" />
        </div>
      ) : (
        <div>
          <div className="flex items-center p-2 gap-4">
            {tapOpen.map((el) => (
              <Tap file={el} key={el.id} />
            ))}
          </div>
          <Higlight content={clicked.filecontent} />
        </div>
      )}
    </>
  );
}

export default OpenTab;
