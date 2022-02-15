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
                    <div className='checkbox-group'>
                        <input className='list-group-item-checkbox' type="checkbox" defaultChecked={item.completed} onChange={() => handleCheck(item.id)}></input>
                        <label className='titlen'>{item.title}</label>
                    </div>
                    <Button onClick={() => deleteItem(item.id)}>Delete</Button>
                </li>  
            ))}
        </ul>
    )
}


        