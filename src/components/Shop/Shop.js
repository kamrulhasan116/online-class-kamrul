import React, { useState }  from 'react';
import fakeData from '../../data/data.json';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [courses] =  useState(fakeData);
    console.log(fakeData);

    const [cart, setCart]= useState([]);
    const addToCart = (course)=>{

        const newCart = [...cart, course];
        setCart(newCart);
        // console.log(addToCart);
    }
    const totalPrice = cart.reduce((total, current) => total + current.pricing, 0);

   
    
    return (
        <div className = "shop-container">
            <h1 className ="text-center">Courses Here</h1>
            <div className="row content-area container-fluid justify-content-center">
            <div className="col-md-9 row course-area border-right border-top pt-3 courses-container">
             {courses.map(course =><Course course ={course} key = {courses.id} addToCart = {addToCart}  ></Course>)}
                </div>

                <div className = "col-md-3 cart-area pt-4 cart-container border-top">

                <h3 className="text-center">Order Summary</h3>
                    <h4 className="text-center">Cart: {cart.length} </h4>
                    <ul className="list-group">
                        {cart.map(course => <Cart course={course}></Cart>)}
                    </ul>
                    <button type="button" className="btn btn-success btn-block mb-5">
                        Checkout <span className="badge badge-light">$ {totalPrice}</span>
                    </button>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Shop;