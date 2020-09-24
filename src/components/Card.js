import React from 'react'
//import ExcerciseImage from '../images/exercise.png'
import CirclesImage from '../images/circles.png'
import './styles/Card.css'


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    //se va a ejecutar despues de que un componente se monte
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                //En el video 13 elimine la imagen del state y aprendi mucha teoria.   
            })
        }, 5000)
    }
    render() {
        const { title, description, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${CirclesImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.image} alt="trucho" className="float-right"></img>
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