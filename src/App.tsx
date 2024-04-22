import { Routes, Route } from 'react-router-dom'
// css
import './App.css'
import Layout from './layout/Layout'
import Home from './page/Home'
// import Notfound from './components/Notfound'
// import Spinner from './components/spinner'

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='*' element={<Notfound/>}/> */}
        {/* <Route path='/spinner' element={<Spinner/>}/> */}
      </Route>
    </Routes>
  )
}

export default App
