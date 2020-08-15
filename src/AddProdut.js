import React, { Component } from 'react'
import { putData } from './componets/utils'

const postUrl = 'http://127.0.0.1:8080/order/'
class AddProduct extends Component {
    state = {
        name:'',
        price:'',
        unit:'',
        imgUrl:''
    }
    submitHandle = () => {
        putData(postUrl, this.state)
    }

    changeHandle = (event, field) => {
        event.preventDefault()
        this.setState({
            [field]: event.target.value
        })
    }
    render() {
        const {name, price, unit, imgUrl} = this.state
        return(
            <div className="add_all">
                <h1>添加商品</h1>
                <form onSubmit={this.submitHandle}>
                    <div className="add_row_1">
                        <label>名称：</label>
                        <input value={name} placeholder="名称" onChange={(event) => this.changeHandle(event, "name")}></input>
                    </div>
                    <div className="add_row_2">
                        <label>价格：</label>
                        <input value={price} placeholder="价格" onChange={(event) => this.changeHandle(event, "price")}></input>
                    </div>
                    <div className="add_row_3">
                        <label>单位：</label>
                        <input value={unit} placeholder="单位" onChange={(event) => this.changeHandle(event, "unit")}></input>
                    </div>
                    <div className="add_row_4">
                        <label>图片：</label>
                        <input value={imgUrl} placeholder="图片" onChange={(event) => this.changeHandle(event, "imgUrl")}></input>
                    </div>
                    <input type="submit" value="submit" disabled={!name || !price || !unit || !imgUrl}></input>
                </form>
            </div>
        )
    }
}
export default AddProduct;