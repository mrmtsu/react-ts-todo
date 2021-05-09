import { memo, VFC } from "react"
import { Link } from "react-router-dom"

export const Contact: VFC = memo(() => {
  return (
    <>
      <h1>Contactページ</h1>
      <Link to="/">
        <p>戻る</p>
      </Link>
    </>
  )
});
