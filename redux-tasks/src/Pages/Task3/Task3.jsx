import { Link } from "react-router-dom";
import {getStr} from "../../Slice/getinput";
import { useDispatch, useSelector } from 'react-redux'
function Task3() {
    const inp = useSelector(getinput())
    const dispatch = useDispatch()
    return (
        <>
            <h1>Задача№3</h1>
            <p>Создайте компонент текстового поля, который позволяет пользователю вводить
                текст и отображает его в реальном времени.
            </p>
            <p>{inp}</p>
            <input onChange={(e)=>dispatch(getStr(e.target.value))}></input>
            <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
        </>
    );
}

export default Task3;