import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Tap from "./Tap";

function OpenTab() {
  const { tapOpen } = useSelector((state: RootState) => state.treeFile);
  return (
    <div>
      <div className="flex items-center p-2">
        {tapOpen.map((el) => (
          <Tap file={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default OpenTab;
