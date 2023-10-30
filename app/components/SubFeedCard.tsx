import React from 'react'
import { Article } from '../lib/types'
type SubFeedCardProps = {
    article:Article
}
const SubFeedCard: React.FC<SubFeedCardProps> = ({article}) => {
  return (
    <div>SubFeedCard</div>
  )
}
export default SubFeedCard