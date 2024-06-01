import Image from "next/image";
import Link from "next/link";

async function Productcard() {
  const response = await fetch("https://dummyjson.com/products?limit=5", {
    next: {
      revalidate: 10,
    },
  });
  const { products } = await response.json();
//   console.log(products);
  return (
    <>
      {products.map((product) => (
        <article
          className="card max-w-96 bg-base-100 shadow-xl"
          key={product.id}
        >
          <figure>
            <img
              src={product.thumbnail}
              alt={product.title}
              //   width={250}
              //   height={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              {product.tags.map((tag, i) => (
                <span className="badge badge-outline" key={i}>{tag}</span>
              ))}
            </div>

          <Link href={`/products/${product.id}`} className="btn btn-sm btn-primary">read more...</Link>
          </div>
        </article>
      ))}
    </>
  );
}
export default Productcard;
