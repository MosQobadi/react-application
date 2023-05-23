import { useNavigate, Routes, Route } from "react-router-dom"

const Post = () => {
  const navigate = useNavigate()

  const click = () => {
    console.log("testing useNavigate")
    navigate("/about")
  }

  return (
    <div>
      <h1>Post </h1>
      <button className="btn" onClick={click}>
        Click
      </button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  )
}

export default Post
