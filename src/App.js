import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import AboutPage from "./components/AboutPage"
import { FaQuestion } from "react-icons/fa"
import AboutIconLink from "./components/AboutIconLink"
import Card from "./components/shared/Card"
import Post from "./components/Post"
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/post" element={<Post />} />
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/post/*" element={<Post />}></Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
