import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import { publicRoutes } from './routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
