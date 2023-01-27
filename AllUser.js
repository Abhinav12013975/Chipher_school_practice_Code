import React,{components} from 'react'

const AllUser = ({user}) => {


  return (
    <div>
        <h3>{user.name}</h3>
        <p>Email : {user.email}</p>
        <p>Phone-Number:{user.phone}</p>
    </div>
  )
}
// class AllUser extends.components{
//    user= this.props.user; 
// }
export default AllUser