import React from 'react'

const Description = (props) => {
    return (
        <div className='.cardDescription'>
            <h2 className='title'>
                {props.title}
            </h2>

            <div className='description'>
                <span className='descriptionTitle'> Descripcion :</span>
                <p className='parrafo'>
                    {props.parrafo}
                </p>
            </div>

            <p className='cantidad'>
                {props.cantidad}
            </p>
            <span className='price'>
                {props.price}
            </span>
        </div>
    )
}

export default Description