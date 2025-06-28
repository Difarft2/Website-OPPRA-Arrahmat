import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./hook/scroll";
import "./css/global.css";

import Home from "./pages/home/index";
import Profil from "./pages/profil";
import ArttimesList from "./pages/arttimes/index";
import MenuBakti from "./pages/masaBakti/index";
import MenuEventfull from "./pages/artikel";
import Error404 from "./pages/err/404";

// route masa bakti 2024-2025
import MasaBakti2425 from "./pages/masaBakti/2024-2025";
import Bahasa from "./pages/masaBakti/2024-2025/devisi/Bahasa";
import Bot from "./pages/masaBakti/2024-2025/devisi/BOT";
import Ilan from "./pages/masaBakti/2024-2025/devisi/Ilan";
import Kebersihan from "./pages/masaBakti/2024-2025/devisi/Kebersihan";
import Keamanan from "./pages/masaBakti/2024-2025/devisi/Kemanan";
import Takmir from "./pages/masaBakti/2024-2025/devisi/Takmir";
import PH from "./pages/masaBakti/2024-2025/devisi/PH";

// Artikel 2024
import Agustus from "./pages/artikel/2024/17 agustus ";
import Hariguru from "./pages/artikel/2024/hariguru";
import Mastaf from "./pages/artikel/2024/mastaf";
import Mufes from "./pages/artikel/2024/mufest";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/arttimes" element={<ArttimesList />} />

        {/* route masa bakti */}
        <Route path="/masabakti" element={<MenuBakti />} />

        {/* route masa bakti 2024-2025 */}
        <Route path="/masabakti/2024-2025" element={<MasaBakti2425 />} />
        <Route path="/masabakti/2024-2025/devisi/ph" element={<PH />} />
        <Route path="/masabakti/2024-2025/devisi/bahasa" element={<Bahasa />} />
        <Route path="/masabakti/2024-2025/devisi/bot" element={<Bot />} />
        <Route path="/masabakti/2024-2025/devisi/ilam" element={<Ilan />} />
        <Route path="/masabakti/2024-2025/devisi/kebersihan" element={<Kebersihan />}/>
        <Route path="/masabakti/2024-2025/devisi/keamanan" element={<Keamanan />}/>
        <Route path="/masabakti/2024-2025/devisi/takmir" element={<Takmir />} />

        {/* route artikel */}
        <Route path="/artikel" element={<MenuEventfull />} />

        {/* route artikel 2024 */}
        <Route path="/artikel/2024/17agustus" element={<Agustus />} />
        <Route path="/artikel/2024/hariguru" element={<Hariguru />} />
        <Route path="/artikel/2024/mastaf" element={<Mastaf />} />
        <Route path="/artikel/2024/mufest" element={<Mufes />} />



        {/* Catch all unmatched routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
