import { Fragment, useState } from "react";
import { Link } from 'react-router-dom'


function WantedCard (props) {
    let [card, setCard] = useState(false)
    
    const regularView = () => {
        return (
            <Fragment>
            <div> Name: {props.name} </div>
            <div> Picture: {props.img}</div>
            <div> Reward: {props.reward}</div>
            </Fragment>
        )
    }
    const expandedView = () => {
        return (
            <Fragment>
            <div> Name: {props.name} </div>
            <div> Description: {props.description} </div>
            <div> Warning: {props.warning}</div>
            <div> Link: {props.url}</div>
            <div> Picture: {props.img}</div>
            <div> Reward: {props.reward}</div>
            </Fragment>
             
        )
    }
    
    return(
        <div onClick={() => setCard(!card)} style={{'display': 'inline-block'}}>
            {card ? expandedView() : regularView()}
        </div>
    )
};

export default WantedCard;

