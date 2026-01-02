import { AppSidebar } from "@/components/app-sidebar";
import { FileSystemTree } from "@/components/file-system-tree";
import { MOCK_FILESYSTEM } from "@/lib/constants";

function SearchPage() {
  return (
    <div className="h-screen w-screen flex flex-row gap-4 p-6 relative z-10">
      <div className="w-20 h-full">
        <AppSidebar />
      </div>
      <div className="flex-1 h-full">
        <FileSystemTree data={MOCK_FILESYSTEM} />
      </div>
    </div>
  );
}

export default SearchPage;
