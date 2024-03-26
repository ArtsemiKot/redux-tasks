import { Link } from "react-router-dom";
import { inputValue, addtask, deletetask } from "../../Slice/listtasks";
import { useDispatch, useSelector } from 'react-redux'
function Task12() {
    const tasks = useSelector(state => state.listtasks)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Задача№12</h1>
            <p>Реализуйте компонент "Список задач", который позволяет пользователю
                добавлять, удалять и отмечать задачи как выполненные.
            </p>
            <div>{tasks.array.map((el) => <p>{el}<button id={el} onClick={(e) => dispatch(deletetask(e.target.id))}>Delete</button></p>)}</div>
            <input onChange={(e) => dispatch(inputValue(e.target.value))}></input>
            <button onClick={() => dispatch(addtask())}>Add</button>
            <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
        </>
    );
}

export default Task12;