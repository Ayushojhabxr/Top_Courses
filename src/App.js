import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import Nav2 from './Components/Nav2';
import { apiUrl, filterData } from './data.js';
import { toast } from 'react-toastify';
import Footer from './Components/Footer.js';

const App = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedCourses, setLikedCourses] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const result = await res.json();

      // Process and save data
      setCourses(result.data);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to get courses based on selected category and search term
  const getCourses = () => {
    let filteredCourses = [];

    if (category === 'All') {
      // Flatten all categories into a single array
      Object.values(courses).forEach(courseArray => {
        filteredCourses = [...filteredCourses, ...courseArray];
      });
    } else {
      // Get courses for the selected category
      filteredCourses = courses[category] || [];
    }

    // Apply search term filter
    if (searchTerm) {
      filteredCourses = filteredCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredCourses;
  };

  return ( 
    <div>
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <Nav2 searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Navbar />

      <div className="bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? (
            <Spinner />
          ) : getCourses().length > 0 ? (
            <Cards courses={getCourses()} category={category}  likedCourses={likedCourses}
            setLikedCourses={setLikedCourses} />
          ) : (
            <p className="text-white text-lg">No Courses Found</p>
          )}
        </div>
      </div>
   
    </div >
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default App;
