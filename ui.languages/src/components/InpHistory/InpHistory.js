//import { useState, useEffect } from 'react';
import style from './InpHistory.module.css';
//import { http } from '../../hooks/http.hooks';
//import TaskItem from './TaskItem';
//import { user } from '../../context/user';

const InpHistory = () => {
    // const [tasks, setTasks] = useState([]);

    // const GET = async () => {
    //     try {
    //         console.log(user.user_id);
    //         const data = await http(`http://localhost:5000/tasks/${user.user_id}`, 'GET');
    //         setTasks(data);
    //         console.log(data);
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }

    // useEffect(() => {
    //     GET()
    // })

    return (
        <div>
            <div className={style['wrapper']}></div>
            <p className={style['title']}>History:</p>
            <div className={style['history']}>
                <p>1. History</p>
                <p>2. History</p>
                <p>3. History</p>
                <p>4. History</p>
                <p>5. History</p>
            </div>
            {/* {tasks.length > 0 ? tasks.map((el, index) => <TaskItem key={index} index={index} objtask={el} />) : null} */}
        </div>
    );
}

export default InpHistory;