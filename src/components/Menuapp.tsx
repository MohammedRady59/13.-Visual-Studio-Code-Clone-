import { useEffect, useRef } from "react";
import { useAppDispatch } from "../redux/store";
import { closeAll } from "../redux/feature/FileTreeSlice";

interface IProps {
  dir: {
    x: number;
    y: number;
  };
  setMenu: (val: boolean) => void;
}

function Menuapp({ dir, setMenu }: IProps) {
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleOutside() {
      setMenu(false);
    }
    window.addEventListener("click", handleOutside);
    return () => {
      window.removeEventListener("click", handleOutside);
    };
  }, [setMenu]);
  return (
    <div ref={menuRef}>
      <ul
        className={`bg-white text-black px-4 py-2 rounded-md cursor-pointer `}
        style={{
          position: "absolute",
          left: dir.x,
          top: dir.y,
        }}
      >
        <li onClick={() => dispatch(closeAll())}>Close All</li>
      </ul>
    </div>
  );
}

export default Menuapp;
