const ProductCard=({ProductData})=>{
    const {
        id,
        title, 
        price,
        rating,
        image,
    } = ProductData;
    const { rate, count } = rating;
    return (
        <div className="Product-card">
            <img className="Product-img" src = {image}></img>
            <h3>{title}</h3>
            <div className="rating">
                <p>{`${rate}⭐️ (${count})`}</p>
            </div>
        </div>
    );
};

export default ProductCard;