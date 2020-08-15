import React, { Component } from 'react'
import Product from './componets/Product'
import fetchData from './componets/utils';
import './Store.css'

const requsetUrl = ' http://127.0.0.1:8080/product/list';

class Store extends Component {
    state = {
        dataList:[]
    }
    orderHandle = () => {

    }

    componentDidMount = () =>{
        fetchData(requsetUrl, 'GET').then(res => {
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
                        return <Product key={"key_product_" + e.id} data={e} orderHanle={this.orderHandle}/>
                    })
                }
            </div>
        )
    }
}
export default Store;