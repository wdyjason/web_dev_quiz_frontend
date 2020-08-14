import React, { Component } from 'react'

class Product extends Component {
    render() {
        const {data, orderHandle} = this.props
        return(
            <div className="product">
                <img src={require(data.imgUrl)} alt="error"/>
                <p>{data.name}</p>
                <p>单价:{data.price}元/{data.unit}</p>
                <button className="store_order_btn" onClick={orderHandle}>+</button>
            </div>
        )
    }
}
export default Product;