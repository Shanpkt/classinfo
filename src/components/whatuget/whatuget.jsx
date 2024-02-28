import React from 'react'


import "./whatuget.scss"
function Whatuget() {


    const items=["5 weeks live class on  MERN","5 PROJECTS for understanding Concept","Api fetching learing with BackEnd","Get Certificate After Completion", "Live class recording"]
  return (
    <div className='willGetBox'>
 <div className='box'>
      <h2>What You All Will Get</h2>
      <ul>
        {/* Map over the items array and render a list item for each */}
        {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    </div>
  )
}

export default Whatuget