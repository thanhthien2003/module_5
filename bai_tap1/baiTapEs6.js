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
 for(let i = 0; i<coursesRating2.length;i++){
    console.log("['" + coursesRating2[i].id + " - " +coursesRating2[i].title + " - " +coursesRating2[i].rating + "']");
 };
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
// task 3
let newSumArray = [...courses,...addedCourses];
                                                              console.log(newSumArray);

























                                                              