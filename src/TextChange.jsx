import React from 'react'
import { useState, useEffect } from 'react'
const TextChange = () => {
    const texts=["Hi, I'm Joshna","Hi, I'm Joshna","Hi, I'm Joshna" ]
    const[currenttext, setCurrentText]= useState("")
    const[endValue, setendvalue]=useState(true);
    const[isForward, setisforward]= useState(true);
    const [index, setIndex] = useState(0);
  return (
    <div>
      TextChange
    </div>
  )
}

export default TextChange
