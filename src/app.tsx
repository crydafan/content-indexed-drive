import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/page";
import FilesPage from "./files/page";
import SearchPage from "./search/page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/files" element={<FilesPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
