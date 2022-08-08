import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Privacy from "./pages/Privacy/Privacy";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import RummyRules from "./pages/RummyRules/RummyRules";
import RummyTips from "./pages/RummyTips/RummyTips";
import Leagal from "./pages/Leagal/Leagal";
import Faq from "./pages/Faq/Faq";
import TC from "./pages/TermCondition/TC";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import AccountOverView from "./components/AccountOverView/AccountOverView";
import AddCash from "./components/AddCash/AddCash";
import WithdrawCash from "./components/WithdrawCash/WithdrawCash";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Transactions from "./components/Transactions/Transactions";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/rummy-rules" element={<RummyRules />} />
          <Route path="/rummy-tips" element={<RummyTips />} />
          <Route path="/rummy-legal" element={<Leagal />} />
          <Route path="/rummy-faq" element={<Faq />} />
          <Route path="/tc" element={<TC />} />

          <Route
            path="protect"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          >
            <Route path="account-overview" element={<AccountOverView />} />
            <Route path="add-cash" element={<AddCash />} />
            <Route path="withdraw-cash" element={<WithdrawCash />} />
            <Route path="personal-detail" element={<PersonalDetails />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
