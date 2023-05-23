import React from "react"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackStats from "./FeedbackStats"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && feedback.length === 0) {
    return <p>There is no feedback</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <FeedbackStats key={feedback.id} feedback={feedback} />
      {feedback.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  )
}

export default FeedbackList
