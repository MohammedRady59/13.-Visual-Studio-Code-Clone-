import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface Ipros {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  show: boolean;
}
function PanelGr({
  defaultLayout = [20, 80],
  leftPanel,
  rightPanel,
  show,
}: Ipros) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="conditional"
    >
      {show && (
        <>
          <Panel collapsible defaultSize={defaultLayout[0]}>
            {leftPanel}{" "}
          </Panel>
          <PanelResizeHandle className="border-r-2 border-white" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
}
export default PanelGr;
