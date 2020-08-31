import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons'



const Course = (props) => {

    const {name,pricing,image,instrutor,class_number,class_duration} = props.course;

    
    return (
        <div className = "col-md-4">
            <div className = "single-item text-center my-3">
                <div className = "card">
                <img className="card-img-top" style={{ height: "200px" }} src={image} alt="" />
                <div className = "card-body">
                <h5 className="card-title">{name}</h5>
                    <h5>Class Number : {class_number}</h5>
                    <h5>Class Duration : {class_duration}</h5>
                        <h6>Instructor: {instrutor}</h6>
                        <h4 className="price">${pricing}</h4>

                        <button className="btn btn-sm btn-primary"
                            onClick={() => props.addToCart(props.course)}><FontAwesomeIcon icon={faPlusSquare} /> Enroll Now</button>  

                </div>

                </div>

            </div>
        </div>
    );
};

export default Course;