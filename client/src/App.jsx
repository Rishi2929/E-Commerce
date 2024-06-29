import './App.css'
import ProductList from './features/product-list/ProductList'
import Counter from './features/counter/Counter'
import Home from './pages/Home'
import Login from './features/auth/components/Login'
import SignUpPage from './pages/SignUpPage'

function App() {

  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <Login /> */}
      <SignUpPage></SignUpPage>
    </div>
  )
}

export default App
