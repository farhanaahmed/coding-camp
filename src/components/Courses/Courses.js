import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';

const Courses = (props)=> {
    const [courses, setCourses]=useState([]);
    const [displayCourses, setDisplayCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setDisplayCourses(data.slice(0,4));
  
        });
    },[]);
    console.log("In courses module");
    console.log(courses);
    console.log(props.flag);

    if(props.flag === '1'){
       
       return (
        <div>
            <div>
                <div className="top-banner">
                     <div className="top-img">
                     <img src="https://forerunner.com.au/wp-content/uploads/programming-languages.png" alt="" />
                     </div>
                     <div className="top-heading">
                         <h2>Welcome to <span id="name">Coding-Camp</span>...!!!</h2>
                         <h2>Learn to code with ease...</h2>
                     </div>
                
                 </div>
            </div>
           <div className="course-container">
                    {
                        
                        displayCourses.map(course => <Home
                            key={course.id}
                            course={course}
                        >
                        </Home>)
                    }
                </div>
            
        </div>
    );
    }
    else return (
        <div className="course-container">
            {
                        
                        courses.map(course => <Home
                            key={course.id}
                            course={course}
                        >
                        </Home>)
                    }

            </div>
    );
};

export default Courses;