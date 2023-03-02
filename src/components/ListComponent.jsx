import React, { Children } from 'react'

const ListComponent = ({list, addItem, deleteItem}) =>{
    
        return (
        <div>
            <h2>{list}</h2>
            <button onClick={addItem}>Add New</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
    }
    export {ListComponent};