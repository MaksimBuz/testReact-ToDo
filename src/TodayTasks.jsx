import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export const TodayTasks = (props) => {
  return (

        <ul className='task_list-items'>
            <li >
               {props.item.Data} 
            </li>
            <li>
               {props.item.TaskCode} 
            </li>
            <li>
               {props.item.ProjectCode} 
            </li>
            <li>
               {props.item.Task} 
            </li>
            <li>
            <select>
                <option className='completed'>Выполнена</option>
                <option className='Pause'>На паузе</option>
                <option>В работе</option>
            </select>
            </li>
            <li>
               {props.item.Responsible} 
            </li>
            <li>
               {props.item.Reassign} 
            </li>
            <li>
               {props.item.Priority} 
            </li>
            <li>
               {props.item.comment} 
            </li>
            <li>
               {props.item.Plantime} 
            </li>
            <li>
               {props.item.Facttime} 
            </li>
            <li>
               {props.item.Start} 
            </li>
            <li>
               {props.item.Finish} 
            </li>

            
        </ul>
        
  )
}
