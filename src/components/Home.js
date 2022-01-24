import React, { Component } from "react";
import axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ContactsOutlined } from "@material-ui/icons";


// export default function Home() {
//     const [itemCount, setItemCount] = React.useState(1);

//     return (
//         <div style={{ display: "block", padding: 30 }}>
//             <h4>How to create ShoppingCart Button in ReactJS?</h4>
//             <div>
//                 <ButtonGroup>
//                     <Button
//                         onClick={() => {
//                             setItemCount(Math.max(itemCount - 1, 0));
//                         }}
//                     >
//                         {" "}
//                         <RemoveIcon fontSize="small" />
//                     </Button>
//                     <Button disabled={true}>
//                         <Badge color="secondary" badgeContent={itemCount}>
//                             <ShoppingCartIcon />{"Add to Cart"}
//                         </Badge>
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setItemCount(itemCount + 1);
//                         }}
//                     >
//                         {" "}
//                         <AddIcon fontSize="small" />
//                     </Button>
//                 </ButtonGroup>
//             </div>
//         </div>
//     );
// }

export default class Home extends Component {

    state = {};
    constructor(props) {
        super(props);

        this.state = {
            allProductsList: []
        }
    }

    //     addProductToCart = e => {
    //     // e.preventDefault();
    //     alert('Hi');
    // };




    componentDidMount = () => {
        axios.get('http://productservice-env.eba-rzpq7paz.us-east-2.elasticbeanstalk.com/products/viewlist/').then(
            res => {
                console.log(res.data);
                this.setState({
                    allProductsList: res.data
                });

            },
            err => {
                console.log(err);
            }
        )
    };

    render() {
        const { allProductsList = [] } = this.state;
        function addProductToCart(e) {
            // alert(e.vendoremail);
            alert("Product has been added to the Cart.");
            axios.post('http://productservice-env.eba-rzpq7paz.us-east-2.elasticbeanstalk.com/products/sendBookingMail/', e).then(
                res => {
                    // console.log(res.data);
                    console.log("successfully mail sent!");
                },
                err => {
                    console.log(err);
                }
            )
        }




        return (
            <div>
                <h2> Welcome to Shopping App Home Page.</h2>
                <div class="container">


                    {
                        allProductsList.length ?
                            allProductsList.map((productList, index) => (
                                // ((index+1)%3==1) ? x : ((index+1)%3==2) ? y : ((index+1)%3==0) ? z
                                <div class="row">
                                    <div class="col card bg-light mb-4">
                                        <div class="card-header">{productList.productname}</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Product Price: {productList.productprice}</h5>
                                            <p class="card-text">
                                                <span>Seller - {productList.vendorname}</span><br></br>
                                                Product Description - {productList.productdescription}</p>
                                            <a type="button" className="btn btn-primary add-cart" onClick={e => addProductToCart(productList)}>
                                                <Badge color="secondary"><ShoppingCartIcon />{"Add to Cart"}</Badge>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            ))
                            :
                            (<div></div>)
                    }




                </div>
            </div>
        );
    }
} 