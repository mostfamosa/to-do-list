import React from "react";
import './table.css';


const handleDelete = (index,e) => {
    e.target.parentNode.parentNode.parentNode.deleteRow(index)
}
const Table = ({ data, column }) => {
    
    return (
        <table>
            <thead>
                <tr>
                    {column.map((item, index) => <TableHeadItem item={item} />)}

                </tr>

            </thead>
            <tbody> 
               
                    {data.map((item, index) => <TableHeadItem2 item={item} />)}
                    
                    
            </tbody>
        </table>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableHeadItem2 = ({ item }) => <tr key={item.index}><th>{item.heading}</th><th>{item.heading2}</th><th> <button onClick={e => handleDelete(item.index,e)}>Delete</button></th></tr>

export default Table; 