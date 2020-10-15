import React from 'react'

function ContactCard(props)
{   
    console.log(props);          //object reusability
    return(
    <div>
        <p>{props.id}</p>
        <h3>{props.name}</h3>
        <p>{props.phn}</p>
        <hr/>
    </div>)
}


export default ContactCard

