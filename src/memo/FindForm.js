import React, { useState, useEffect, memo } from "react";
import usePersist from "../Persist";

function FindForm (props) {
  const [memo, setMemo] = usePersist("memo", [])
  const [fmemo, setFMemo] = usePersist("findMemo", [])
  const [message, setMessage] = useState('')
  const [mode, setMode] = usePersist('mode', 'find')

  const doChange = (e) => {
    setMessage(e.target.value)
  }

  const doAction = (e) => {
    // メッセージがからの場合にモードをデフォルトに戻す
    if(message == '') {
      setMode('default')
      return
    }

    // 検索に一致するメモの配列を作成
    let res = memo.filter((item, key) => {
      return item.message.includes(message)
    })
    // findMemoストレージを変更
    setFMemo(res)
    // モードを変更
    setMode('find')
    // 
    // setMessage('')
  }

  return (
    <form onSubmit={doAction}>
      <div className="form-group row">
        <input type="text" value={message} onChange={doChange} className="form-control-sm col" />
        <input type="submit" value="Find" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default FindForm