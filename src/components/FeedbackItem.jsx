import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
