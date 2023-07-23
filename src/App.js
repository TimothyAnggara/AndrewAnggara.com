import './App.css';

// Import your components
import LeftPage from "./Page/LeftPage";
import RightPage from "./Page/RightPage";

export default function App() {
  return (
    <div id="top">
      <div className="page-container flex">
        <LeftPage />
        <RightPage />
      </div>

    
    </div>
  );
}
