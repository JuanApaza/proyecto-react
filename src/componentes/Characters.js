import React from 'react'

const Characters = ({characters = [] }) => {
    return (
        <div class="row">
            { characters.map((item, index) =>(
                <div key={index} class="col">
                    <div class="card" style={{minWidth: "200px"}}>
                        <img src={item.image} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {Characters}
