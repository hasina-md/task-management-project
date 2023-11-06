import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'
import appStore from './store/store'
import Login from './components/users/Login'
import Register from './components/users/Register'

export default function App() {
    return (
        <Provider store={appStore}>
            <div className="container max-w-2xl">
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<>
                            <Login myProp="SOME VALUE" />
                            <hr />
                            <Register someProps="STATIC DATA" />
                        </>}></Route>
                        <Route path="/add" element={<AddProduct />}></Route>
                        <Route path="/edit/:id" element={<EditProduct />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    )
}