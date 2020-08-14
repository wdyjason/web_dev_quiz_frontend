import React, { Component } from 'react'

class AddProduct extends Component {
    state = {
        name:'',
        price:'',
        unit:'',
        imgUrl:''
    }
    submitHandle = () => {

    }
    render() {
        return(
            <div classNam="add_all">
                <h1>添加商品</h1>
                <form onSubmit={this.submitHandle}>
                    <div classNam="add_row_1">
                        <label>名称：</label>
                        <input placeholder="名称"></input>
                    </div>
                    <div classNam="add_row_2">
                        <label>价格：</label>
                        <input placeholder="价格"></input>
                    </div>
                    <div classNam="add_row_3">
                        <label>单位：</label>
                        <input placeholder="单位"></input>
                    </div>
                    <div classNam="add_row_4">
                        <label>图片：</label>
                        <input placeholder="图片"></input>
                    </div>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}
export default AddProduct;