import React from 'react'
import '../components/styles/Errors.css'
import FatalErrorImage from '../images/500.png'

const FatalError = () => (

<div className="text-center">
<h1 className="Error_Text">Error: 500 Unexpected Error</h1>
<img src={FatalErrorImage} alt="500 Unexpected Error" className="Error_Image"></img>
</div>

)

export default FatalError