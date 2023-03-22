import React from 'react'

const Description = (props) => {
    return (
        <div className='descriptionCard'>
            <h2 className='title'>
                {props.title}
            </h2>

            <div className='containerDescription'>
                <span className='descriptionTitle'> Descripcion</span>
                <p className='parrafo'>
                    {props.parrafo}
                </p>
            </div>

            <span className='price'>
                {props.price}
            </span>
        </div>
    )
}

export default Description