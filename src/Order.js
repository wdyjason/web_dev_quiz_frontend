import React, { Component } from 'react'
import OrderRow from './componets/OrderRow';
import fetchData from './componets/utils';

const requsetUrl = ' http://127.0.0.1:8080/order/list';

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
  
    
    deleteHanle = () => {
        
        this.setState({
            dataList:[],
        })
    }

    render() {
        // console.log(this.state.dataList)
        return(
            <table className="order_all">
                <thead>
                    <td>名字</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>单位</td>
                    <td>操作</td>
                    <hr></hr>
                </thead>
                <tbody>
                    {
                        this.state.dataList.map(e => {
                            return <OrderRow key={"key_" + e.id} data={e} deleteHanle={this.deleteHanle}/>
                        })
                    }
                </tbody>
            </table>
        )
    }
}


export default Order;