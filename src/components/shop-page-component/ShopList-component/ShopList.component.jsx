import ShopItem from "../ShopItem.component/ShopItem.component";

const ShopList = ({ shoes }) => {
    return (
        <div className="shop-content">
            {
                shoes.length > 0
                    ? <div className="products">
                        {shoes.map((shoe) => {
                            return <ShopItem key={shoe.id} shoe={shoe.data} shoeId={shoe.id} />
                        })}
                    </div>
                    : <p className="no-cards-p">No cards with this name yet</p>
            }

        </div>

    )
};

export default ShopList;