import React from 'react';


const Grid = ({ config, data }) => {
  
  return (<table>
    <thead>
    <tr>
   {config.map(obj =><th>{obj.title}</th>)}
   </tr>
    </thead>
    <tbody>
   {data.map(obj =><tr>{config.map(mKey =><td>{ mKey.component?<mKey.component data={obj[mKey.field]} />:obj[mKey.field] }</td>)}</tr>)}
    </tbody>
   </table>)
}

export default Grid;