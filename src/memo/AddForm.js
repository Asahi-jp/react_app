import React, { useState, useEffect } from "react";
import usePersist from "../Persist";

function AddForm (props) {
  const [memo, setMemo] = usePersist("memo", [])
  const [message, setMessage] = useState('')
  const [mode, setMode] = usePersist("mode", "default") //←こちらを追加

  const doChange = (e) => {
    setMessage(e.target.value)
  }

  const doAction = (e) => {
    const data = {
      message: message,
      created: new Date()
    }
    memo.unshift(data)
    setMemo(memo)
    setMode("default") //←こちらを追加
    setMessage('')
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" className="form-control-sm col" onChange={doChange} value={message} required />
        <input type="submit" value="Add" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default AddForm