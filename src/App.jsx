import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <p>hiiiiiiiiiiiiii</p>
       <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* if path has not been found use notfound component to display notfound by default */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App
