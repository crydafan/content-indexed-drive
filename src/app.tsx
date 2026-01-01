import "./index.css";
import { FileSystemTree } from "./components/file-system-tree";
import { MOCK_FILESYSTEM } from "./lib/constants";

export function App() {
  return (
    <div className="h-screen w-screen flex flex-col p-6 relative z-10">
      <FileSystemTree data={MOCK_FILESYSTEM} />
    </div>
  );
}

export default App;
