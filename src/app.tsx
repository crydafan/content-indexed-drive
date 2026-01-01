import { FileSystemTree, type TreeNode } from "./components/file-system-tree";
import "./index.css";

const mockFileSystem: TreeNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "ui",
            type: "folder",
            children: [
              { name: "button.tsx", type: "file" },
              { name: "card.tsx", type: "file" },
              { name: "input.tsx", type: "file" },
            ],
          },
          { name: "FileSystemTree.tsx", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [{ name: "utils.ts", type: "file" }],
      },
      { name: "App.tsx", type: "file" },
      { name: "index.tsx", type: "file" },
      { name: "index.css", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "README.md", type: "file" },
];

export function App() {
  return (
    <div className="h-screen w-screen flex flex-col p-6 relative z-10">
      <FileSystemTree data={mockFileSystem} />
    </div>
  );
}

export default App;
