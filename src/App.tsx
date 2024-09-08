import "./App.css";
import OpenTab from "./components/OpenTab";
import PanelGr from "./components/Panel";
import ReculiveComponent from "./components/ReculiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div className="flex h-screen">
      <PanelGr
        leftPanel={
          <div className="w-64 ">
            <ReculiveComponent fileTree={fileTree} />
          </div>
        }
        show={true}
        rightPanel={<OpenTab />}
      />
    </div>
  );
}

export default App;

/* function factarial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factarial(n - 1);
}
console.log(factarial(5));
 */
