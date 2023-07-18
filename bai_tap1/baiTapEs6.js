let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
// task 1
let coursesRating = courses.filter(function(courses){
    return courses.rating >= 4; 
});
console.log(coursesRating);
// task 2
let coursesRating2 = courses.filter(function(courses){
    return courses.rating < 4;
});
 coursesRating2.map((coursesRating2) =>{
  console.log(coursesRating2.id +" - "+ coursesRating2.title +" - "+ coursesRating2.rating)
 }
 )
// task 3
let addedCourses = [ 
  { 
    id: 6, 
    title: "PHP Tutorial", 
    rating: 3, 
  }, 
  { 
    id: 7, 
    title: "C# Tutorial", 
    rating: 2, 
  }, 
  { 
    id: 8, 
    title: "Docker Tutorial", 
    rating: 3.8, 
  } 
]; 
let newSumArray = (courses,addedCourses) => {
  return [...courses,...addedCourses]
}
console.log(newSumArray(courses,addedCourses));                                                          