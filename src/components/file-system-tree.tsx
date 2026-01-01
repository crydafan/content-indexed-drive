import { useState } from "react";
import { ChevronRight, ChevronDown, Folder, File } from "lucide-react";

export interface TreeNode {
  name: string;
  type: "file" | "folder";
  children?: TreeNode[];
}

interface TreeItemProps {
  node: TreeNode;
  depth: number;
}

function TreeItem({ node, depth }: TreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFolder = node.type === "folder";

  const handleClick = () => {
    if (isFolder) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="font-mono text-sm">
      <div
        className={`flex items-center gap-2 py-1 px-2 hover:bg-accent rounded cursor-pointer transition-colors ${
          isFolder ? "text-gray-500" : "text-gray-300"
        }`}
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={handleClick}
      >
        {isFolder && (
          <span className="shrink-0">
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        )}
        {!isFolder && <span className="w-4 shrink-0"></span>}
        <span className="shrink-0">
          {isFolder ? <Folder size={16} /> : <File size={16} />}
        </span>
        <span className="truncate">{node.name}</span>
      </div>
      {isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeItem
              key={`${child.name}-${index}`}
              node={child}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface FileSystemTreeProps {
  data: TreeNode[];
}

export function FileSystemTree({ data }: FileSystemTreeProps) {
  return (
    <div className="w-full h-full bg-card border border-border rounded-lg p-4 overflow-auto">
      <div className="font-mono text-sm mb-2 text-muted-foreground">
        ~/my-drive
      </div>
      {data.map((node, index) => (
        <TreeItem key={`${node.name}-${index}`} node={node} depth={0} />
      ))}
    </div>
  );
}
