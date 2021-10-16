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
                 <div className="course-container">
                     <div>
                         <img className=" w-75 img-fluid service-img my-3" src={img} alt="" />
                     </div>
                     <div className="my-3"> 
                         <h4 className="title">{name}</h4>
                         <p className="details">{description}</p>
                         <p className="instructor">{instructor}</p>
                         
                     </div>
                     <div>
                        <button className="btn-secondary rounded p-2 my-5 mx-2" >${price}</button>
                     </div>
                 </div>
            </div>
         );
     } else return (<p></p>);



    
};

export default Home;