"use client"
import React from 'react'
import { useState } from 'react';

const Counter = () => {
    console.log("counter rendered");
    const [count, setsount] = useState(0)
  return (  
    <div>
      <button onClick={() => {
        setsount(count+1)
      }
      }>Count:{count}</button>
    </div>
  ) 
}

export default Counter
