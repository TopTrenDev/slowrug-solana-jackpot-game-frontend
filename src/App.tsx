import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Tower from "./pages/Tower";
import InfiniteRug from "./pages/InfiniteRug";
import Operators from "./pages/Operators";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/tower" element={<Tower />} />
        <Route path="/infinite-rug" element={<InfiniteRug />} />
        <Route path="/operators" element={<Operators />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
