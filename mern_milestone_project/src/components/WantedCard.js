import { useState } from "react";
import { Link } from 'react-router-dom'


function WantedCard (props) {
    let [card, setCard] = useState(false)
    
    const regularView = () => {
        return (
            <div> Name: {props.name} </div>
        )
    }
    const expandedView = () => {
        return (
                // <div>{props.name}</div>
                <div><p>gone</p></div>
             
        )
    }
    
    return(
        <div onClick={() => setCard(!card)} style={{'display': 'inline-block'}}>
            {card ? expandedView() : regularView()}
        </div>
    )
};

export default WantedCard;





// const {name} = props
    
// return (
//     <div> Name: {name} </div>
// )