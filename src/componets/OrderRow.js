import React, { Component } from 'react'
import './OrderRow.css'

class OrderRow extends Component {
    
    render() {
        const {data, deleteHandle} = this.props
        return(
            <tr className="order_table_row">
                <td>
                    {data.name}
                </td>
                <td>
                    {data.price}
                </td>
                <td>
                    {data.quantity}
                </td>
                <td>
                    {data.unit}    
                </td>
                <td>
                    <button className="order_delete_btn" onClick={() => deleteHandle(data.id)}>删除</button>    
                </td>
            </tr>
           
        )
    }
}
export default OrderRow