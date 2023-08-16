import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './router/router'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            element={route.element}

          />
        ))}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
