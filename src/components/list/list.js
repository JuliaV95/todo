import React from 'react';
import Button from '../button/button';

export const ItemList = ({tasks, deleteItem, handleCheck}) => {

    return (
        <ul className="list-group">
            {tasks.map((item) => (
                <li 
                    className='list-group-item'
                    key={item.id}
                >
                    <div>
                        <input className='list-group-item-checkbox' type="checkbox" defaultChecked={item.done} onChange={() => handleCheck(item.id)}></input>
                        <label className='description'>{item.description}</label>
                    </div>
                    <Button onClick={() => deleteItem(item.id)}>Delete</Button>
                </li>  
            ))}
        </ul>
    )
}


        