import React from "react"

const Notification = ({ notification }) => {
  if (!notification){
    return null
  }
  else return(
    <div> successfully created new anecdote: {notification}</div>
  )
}

export default Notification