import React, { Component } from 'react'
import OrderRow from './componets/OrderRow';

const requsetUrl = ' http://localhost:8080/order/list';

class Order extends Component{
    state = {
        dataList:[]
    }

    componentDidMount() {
        fetchData(requsetUrl).then((result) => {
            // this.setState({
            //     dataList:result,
            // })
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

async function fetchData(url) {
    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type":'Application/json'
        },
        mode: 'no-cors'
    })
      .then((response) => {
        if (response.status === 200) {
            console.log(response)
          return response.json();
        }
        throw new Error('error');
      })
      .catch((error) => console.error(error));
  }

export default Order;