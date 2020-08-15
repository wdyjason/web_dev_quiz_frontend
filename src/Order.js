import React, { Component } from 'react'
import OrderRow from './componets/OrderRow';
import {fetchData} from './componets/utils';
import './Order.css'

const requsetUrl = ' http://127.0.0.1:8080/order/list';
const deleteUrl = 'http://127.0.0.1:8080/order/'

class Order extends Component{
    state = {
        dataList:[]
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
  
    
    deleteHandle = (id) => {
        fetchData(deleteUrl + id + '?quantity=0', 'PATCH')
        let aferList = this.state.dataList.filter(e => e.id !== id)
        this.setState({
            dataList:aferList
        })
    }

    render() {
        // console.log(this.state.dataList)
        return(
            <table className="order_all">
                <thead> 
                    <tr className="table_head">
                    <td>名字</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>单位</td>
                    <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.dataList.map(e => {
                            return <OrderRow key={"key_" + e.id} data={e} deleteHandle={this.deleteHandle}/>
                        })
                    }
                </tbody>
            </table>
        )
    }
}


export default Order;