import React, { Component } from 'react'
import Product from './componets/Product'
class Store extends Component {
    state = {
        dataList:[]
    }
    orderHandle = () => {

    }
    render() {
        return(
            <div className="store_all">
                {
                    this.state.dataList.map(e => {
                        return <Product key={"key_product_" + e.id} data={e} orderHanle={this.orderHandle}/>
                    })
                }
            </div>
        )
    }
}
export default Store;