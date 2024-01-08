import React from 'react'
import './content.css'
function Content() {
  return (
    <div>
       <div id='some1'>
    <aside id='some'> 
    <li>
      <ul>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">About</a></li>
        <li><a href="#">Contact</a> </li>
      </ul>
    </li>
    
    </aside> 
    <div id='forh2'>
    <h2>This is a Section</h2>
    <p>
      This is a paragraph within a section </p>
      
     <img src='https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg'></img>
     
     <li>
      <ul>
        <li> This is an unordered list (ul)</li>
        <li> About</li>
        <li>Contact</li>
      </ul>
    </li>
    </div>    
    
   </div>
    </div>
  )
}

export default Content