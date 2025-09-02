import Preview from "@/components/Preview";
import { Route, Routes } from "react-router";
import UpdateStyle from "@/components/UpdateStyle";
import AppNavBar from "@/components/AppNavBar";

function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen w-full">
        <div className="container mx-auto h-full pt-6 px-4 fle flex-col space-y-10">
          <AppNavBar />
          <Routes>
            <Route index element={<Preview />} />
            <Route path="/update-style" element={<UpdateStyle />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
