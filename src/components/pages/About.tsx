import { memo, VFC } from "react"
import { Link } from "react-router-dom"

export const About: VFC = memo(() => {
  return (
    <>
      <h1>ABOUTページ</h1>
      <Link to="/">
        <p>戻る</p>
      </Link>
    </>
  )
});
