import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex bg-[#FAF9F5] text-stone-900 flex-col min-h-screen min-w-screen w-full overflow-x-hidden selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <div className=" flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
