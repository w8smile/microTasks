import React from 'react';


type topCarsType = {
    topCars: CarsType []
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: topCarsType) => {
    return (
        <table>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr key={objectFromTopCarsArray.model}>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}</table>

    )


}