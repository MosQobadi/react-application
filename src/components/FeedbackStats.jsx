import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let average =
    feedback.reduce((a, b) => {
      return a + b.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedback.length}</h4>
      <h4>Average: {average}</h4>
    </div>
  )
}

export default FeedbackStats
