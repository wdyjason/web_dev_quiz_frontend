import React, { Component } from 'react'
import Product from './componets/Product'
import {fetchData} from './componets/utils';
import './Store.css'

const requestUrl = ' http://127.0.0.1:8080/product/list';
const addUrl = 'http://127.0.0.1:8080/order/'

class Store extends Component {
    state = {
        dataList:[]
    }
    orderHandle = (data) => {
        let futureQuantity = data.quantity + 1
        fetchData(addUrl + data.id + "/?quantity=" + futureQuantity, 'PATCH')
        this.state.dataList.forEach(e => {
            if (e.id === data.id) {
                e.quantity = futureQuantity
            }
        })
    }

    componentDidMount = () =>{
        fetchData(requestUrl, 'GET').then(res => {
            // console.log(res);
            this.setState({
                dataList: res
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return(
            <div className="store_all">
                {
                    this.state.dataList.map(e => {
                        return <Product key={"key_product_" + e.id} data={e} orderHandle={this.orderHandle}/>
                    })
                }
            </div>
        )
    }
}
export default Store;