import React, { useState, useEffect } from 'react';
import './CourseTable.css';

interface Course {
    id: number;
    name: string;
    StartDate: string;
    LessonCompleted: string;
    Duration: number;
}

const CourseTable: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data.courses));
    }, []);

    return (
        <table className="course-table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Lesson Completed</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={course.id}>
                        <td>{course.name}</td>
                        <td>{course.StartDate}</td>
                        <td>{course.LessonCompleted}</td>
                        <td>{course.Duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CourseTable;
