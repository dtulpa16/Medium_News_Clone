import React from 'react'
import { Article } from '../lib/types'
type SubFeedProps = {
    articles: Article[]
}
const SubFeed:React.FC<SubFeedProps> = ({articles}) => {
  return (
    <div>SubFeed</div>
  )
}
export default SubFeed