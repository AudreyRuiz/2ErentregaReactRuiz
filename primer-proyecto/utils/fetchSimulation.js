import React from 'react'
const fetchSimulation = (dataBase, time) => {
    return new Promise((resolve, rejact) => {
        resolve(dataBase)
        rejact(new Error("algo salio mal"))
    },time)
}

export default fetchSimulation