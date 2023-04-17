import {createRoot} from 'react-dom/client'
import App from './components/app/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page404 from './components/Page404'
import Home from './components/Home'
import Cuadricula from './components/cuadricula/Cuadricula'
import CryptoBase from './components/cryptoInfo/CryptoBase'
import Perfil from './components/usuario/Perfil'
import { UserContextProvider } from './context/UserContextProvider'
import Login from './components/usuario/Login'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />}/>
                    <Route path='perfil' element={<Perfil />}/>
                </Route>
                <Route path='/cryptos' element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=':id' element={<CryptoBase />} />
                </Route>
                <Route path='/login' element={<Login />}/>
                <Route path='*' element={<Page404 />}/>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
    
)
