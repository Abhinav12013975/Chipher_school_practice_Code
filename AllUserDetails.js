import React from 'react'
import AllUser from './AllUser'
const AllUserDetails = () => {
    const details=[
        {
            name:"john",
            email:"john@example.com",
            phone:987654321,
        },
        {
            name:"max",
            email:"max@example.com",
            phone:987654321,
        },
        {
            name:"allen",
            email:"allen@example.com",
            phone:987654321,
        },
    ]
    // let array = details.map((value, index) =>{
    //     <AllUserDetails key = {index} value={value}/>
    // });
  return (
    <div>
        {/* <AllUser user={details[0]}/>
        <AllUser user={details[1]}/>
        <AllUser user={details[2]}/> */}
    {
       details.map((value, index)=>(
           <AllUser user={value} key={index}/>
       ))
    }
    </div>
  )
}

export default AllUserDetails