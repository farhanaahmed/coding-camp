import React from 'react';
import './Home.css'
import Courses from '../Courses/Courses';
import { Link } from 'react-router-dom';

const Home = (props) => {
     console.log(props);
     console.log(props.course);
     const course= props.course;
     
     //console.log(props.course.course);
     console.log("This is in home");
     
     if(course){
        const { name, img, description, instructor, price } = course;
        return (
            <div className="home">
                 <div className="service-container">
                     <div>
                         <img className="w-75 service-img my-3" src={img} alt="" />
                     </div>
                     <div>
                         <h4 className="service-name">{name}</h4>
                         <p className="details">{description}</p>
                         <p className="instructor">{instructor}</p>
                     </div>
                     <div>
                         <button>${price}</button>
                     </div>
                 </div>
            </div>
         );
     } else return (<p></p>);



    
};

export default Home;