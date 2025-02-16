import React from 'react'
import { notFound } from 'next/navigation'

const ReviewDetail = ({params}:{
    params:{
        id:string,
        reviewId:string
    }
}) => {
if(parseInt(params.reviewId)>1000){
notFound()
}

  return (
    <h1>Review {params.reviewId} for product {params.id}</h1>
  )
}

export default ReviewDetail