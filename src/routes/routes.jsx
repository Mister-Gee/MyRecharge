import {Routes as Switch, Route, Navigate} from 'react-router-dom';
import BuyToken from '../Pages/BuyToken/BuyToken';
import Home from '../Pages/Home/Home';
import MyMeters from '../Pages/MyMeters/MyMeters';
import MyProfile from '../Pages/MyProfile/MyProfile';
import Settings from '../Pages/Settings/Settings';
import TransactionHistory from '../Pages/TransactionHistory/TransactionHistory';
import ProtectedRoute from './ProtectedRoute';
import { getUserToken } from '../utilities/userTokens';


const Routes = () => {
  const token = getUserToken()
  return (
    <Switch>
        <Route index path="/" element={!token ? <Home /> : <Navigate to="buy-token" replace/> } />
        <Route path="/buy-token" element={
          <ProtectedRoute>
            <BuyToken />
          </ProtectedRoute>
        } />
        <Route path="/transaction-history" element={
          <ProtectedRoute>
            <TransactionHistory />
          </ProtectedRoute>
        } />
        <Route path="/my-meter" element={
          <ProtectedRoute>
            <MyMeters />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="/*" element={<Home />} />
    </Switch>
  )
}

export default Routes