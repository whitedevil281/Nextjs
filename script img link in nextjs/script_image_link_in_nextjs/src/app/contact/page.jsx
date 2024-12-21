import React from 'react'
import Script from 'next/script'

const Contact = () => {
  return (
    <div>
     <Script>
        {`
        alert("hello world");
        `}
     </Script>
     {/* <Script src='link here ' strategy='dcos'/> */}
      I am conatct
    </div>
  )
}

export default Contact
