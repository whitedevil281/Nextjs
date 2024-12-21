import React from 'react'

const page = ({params}) => {
  return (
    <div>
      I am product with id :{params.id} and name : {params.name} \n
    </div>  
  )
}

export default page
