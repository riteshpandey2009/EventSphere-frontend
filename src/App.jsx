import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex bg-[#FAF9F5] flex-col min-h-screen min-w-screen w-full overflow-x-hidden selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <main className=" w-full">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
