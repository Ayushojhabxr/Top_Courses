import React from "react";
import Card from "./Card";

const Cards = ({ courses = [], likedCourses, setLikedCourses }) => {
  // Ensure courses is always an array
  const isCoursesArray = Array.isArray(courses) && courses.length > 0;

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {isCoursesArray ? (
        // Render cards if courses are available
        courses.map((course) => (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        // Display message if no courses are available
        <p className="text-white text-lg">No courses found</p>
      )}
    </div>
  );
};

export default Cards;
