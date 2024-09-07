import "./App.css";
import OpenTab from "./components/OpenTab";
import ReculiveComponent from "./components/ReculiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div className="flex  h-screen">
        <div className="w-64  border-r border-white">
          <ReculiveComponent fileTree={fileTree} />
        </div>
        <OpenTab />
      </div>
    </>
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
