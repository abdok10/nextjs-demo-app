async function ProductDetails({ params }) {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`, {
        next: {
            revalidate: 60,
        },
    });
    const product = await response.json();
    console.log(product);
  return (
    <div className="mt-14">
      <p>Product Details:</p>
        <div className="flex justify-between">
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <h1 className="text-xl font-bold ">{product.title}</h1>
                <p>{product.description}</p>
            </div>
        </div>
    </div>
  );
}
export default ProductDetails;
