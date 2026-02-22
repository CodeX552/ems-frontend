import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <HeaderComponent />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path='/' element={<ListEmployeeComponent />}></Route>
            <Route path='/employees' element={<ListEmployeeComponent />}></Route>
            <Route path='/add-employee' element={<EmployeeComponent />}></Route>
            <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App
