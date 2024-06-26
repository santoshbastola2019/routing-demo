

const ProductDetails = ({params}:{
    params:{id:string}
})=> {
  return (
  <h1>Product Details about {params.id} </h1>
  )
}

export default ProductDetails