import React from 'react'
import Exercises from '../pages/Exercises'
import Card from './Card'


function ExerciseList(props){
return(
    <div>
      { props.exercises.map((exercise)=>{
            return(
                <Card
                 title={exercise.title}
                 description={exercise.description}
                 image={exercise.image}
                 leftColor={exercise.leftColor}
                 rightColor={exercise.rightColor}
                />
                  )
            })}

    </div>
)
}

export default ExerciseList