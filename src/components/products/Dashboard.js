import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";


export default class MyProfile extends Component {

    state = {};
    handleSubmit = e => {
        // alert('ok');
        e.preventDefault();
        const data = {
            id: this.pdid,
            productname: this.pdname,
            productprice: this.pdprice,
            productdescription: this.pddesc,
            totalavailableproducts: this.pdtotal,
            vendoremail: this.props.user.email
        }
        // console.log(data);
        axios.post('http://productservice-env.eba-rzpq7paz.us-east-2.elasticbeanstalk.com/products/addnew/', data).then(
            res => {
                console.log(res.data);
                window.location.reload(false);
            }
        ).catch(
            err => {
                console.log(err.data);
            }
        )
    };

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        }
    }

    componentDidMount = () => {
        axios.get('http://productservice-env.eba-rzpq7paz.us-east-2.elasticbeanstalk.com/products/list').then(
            res => {
                console.log(res.data);
                this.setState({
                    productsList: res.data
                });

            },
            err => {
                console.log(err);
            }
        )
    };
    render() {
        const { productsList = [] } = this.state;
        function deleteThisProduct(e) {
            alert(e.id);
            axios.get('http://productservice-env.eba-rzpq7paz.us-east-2.elasticbeanstalk.com/products/delete-product/' + JSON.stringify(e.id)).then(
                res => {
                    // console.log(res.data);
                    console.log("product successfully deleted!");
                    window.location.reload(false);
                },
                err => {
                    console.log(err);
                }
            )
        }

        return (
            <div>
                <h2>Seller dashboard</h2>
                <div class="container-lg">
                    <div class="table-responsive">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-8"><h2>Products Details</h2></div>
                                    <div class="col-sm-4">
                                        {/* Button to trigger modal */}
                                        <button class="btn btn-primary btn-sm add-new" data-toggle="modal" data-target="#modalForm">
                                            <i class="fa fa-plus"></i> Add New Product
                                        </button>
                                        {/* modal */}
                                        <div class="modal fade" id="modalForm" role="dialog">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    {/* <!-- Modal Header --> */}
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal">
                                                            <span aria-hidden="true">&times;</span>
                                                            <span class="sr-only">Close</span>
                                                        </button>
                                                        <h4 class="modal-title" id="myModalLabel">AddNewProduct</h4>
                                                    </div>

                                                    {/* <!-- Modal Body --> */}
                                                    <div class="modal-body">
                                                        <p class="statusMsg"></p>
                                                        <form onSubmit={this.handleSubmit}>
                                                            <div class="form-group">
                                                                <label>Product Id</label>
                                                                <input type="text" className="form-control" id="pdid" placeholder="Enter Product Id"
                                                                    onChange={e => this.pdid = e.target.value} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Product Name</label>
                                                                <input type="text" className="form-control" id="pdname" placeholder="Enter Product Name"
                                                                    onChange={e => this.pdname = e.target.value} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Product Price</label>
                                                                <input type="text" className="form-control" id="pdprice" placeholder="Enter Product Price"
                                                                    onChange={e => this.pdprice = e.target.value} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Product Description</label>
                                                                <textarea className="form-control" id="pddesc" placeholder="Enter Product Description"
                                                                    onChange={e => this.pddesc = e.target.value}></textarea>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>No. of Products In Stock</label>
                                                                <input type="text" className="form-control" id="pdtotal" placeholder="Enter No. of Products"
                                                                    onChange={e => this.pdtotal = e.target.value} />
                                                            </div>
                                                            {/* <!-- Modal Footer --> */}
                                                            <div class="modal-footer">
                                                                <button className="btn btn-default" data-dismiss="modal">Close</button>
                                                                <button className="btn btn-success" onClick="javascript: $('#modalForm').modal('hide');">
                                                                    Submit
                                                                </button>
                                                                {/* onClick="javascript: $('#modal').hide();" */}
                                                            </div>
                                                        </form>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>SNo.</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Product Description</th>
                                        <th>Total Products</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productsList.length ?
                                            productsList.map((productList, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{productList.productname}</td>
                                                    <td>{productList.productprice}</td>
                                                    <td>{productList.productdescription}</td>
                                                    <td>{productList.totalavailableproducts}</td>
                                                    <td>
                                                        <button className="btn btn-warning btn-sm editbutton mr-1">Edit</button>
                                                        {'   '}
                                                        <button className="btn btn-danger btn-sm deletebutton" onClick={e => deleteThisProduct(productList)}>Delete</button>
                                                        {/* <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a> */}
                                                    </td>
                                                </tr>
                                            ))
                                            :
                                            (<tr>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}