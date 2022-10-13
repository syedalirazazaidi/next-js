import React from 'react'
import { useRouter } from 'next/router'
const Review = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <div>
      reviewIReview {reviewId} productId {productId}{' '}
    </div>
  )
}

export default Review
