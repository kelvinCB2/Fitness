import React from 'react'
import ExcerciseImage from '../images/exercise.png'
import CirclesImage from '../images/circles.png'
import './styles/Card.css'


class Card extends React.Component {

    render() {
        const {title,description,image,leftColor,rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${CirclesImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={image} className="float-right"></img>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card