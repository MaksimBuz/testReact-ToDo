import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState  } from 'react';

import { TodayTasks } from './TodayTasks'
import TaskTitle from './Task-title'



const Content = () => {
    let Now = moment().format('L');  
    let Tomorrow = moment().add(1, 'days').format('L');
 
    const [Lists,setLists]=useState(null);

    useEffect(()=>{
        axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then((res)=>{setLists(res.data)});
    },[]);
    return (
        <div>
            <TaskTitle />
            {/*Выполненные задачи  */}
            <div class="dropdown">
                <button class="btn  dropdown-toggle btn-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Выполненные задачи 
                </button>
                <ul class="dropdown-menu">
                    {Lists.filter(item=>item.Status== true ).map(item =>
                        <li>  <TodayTasks item={item} /></li>
                    )}
                </ul>
            </div>
   {/*Задачи на сегодня   */}
            <div class="dropdown">
                <button class="btn  dropdown-toggle btn-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Задачи на сегодня
                </button>
                <ul class="dropdown-menu">
                    {Lists.filter(item=>item.Data== Now ).map(item =>
                        <li>  <TodayTasks item={item} /></li>
                    )
                    }
                </ul>
            </div>
{/*Предстоящие задачи  */}
            <div class="dropdown">
                <button class="btn  dropdown-toggle btn-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Предстоящие задачи
                </button>
                <ul class="dropdown-menu">
                {Lists.filter(item=>item.Data== Tomorrow ).map(item =>
                        <li>  <TodayTasks item={item} /></li>
                    )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Content