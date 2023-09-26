import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CanvasAssignmentList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'your-canvas-access-token' with your actual access token
    const accessToken = '--------api access code----------';

    axios.get('https://pacific.instructure.com/api/v1/courses', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setCourses(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching courses:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div>
      <h2>Canvas Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Course Code: {course.course_code}</p>
            {/* Add more course information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CanvasAssignmentList;
