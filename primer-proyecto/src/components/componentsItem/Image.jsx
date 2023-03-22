import React from 'react'

const Image = (props) => {
    return (
        <div className='imgCard'>
            <img src={props.imagen}></img>
        </div>
    )
}

export default Image
