function ProductCard({product}) {
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard;