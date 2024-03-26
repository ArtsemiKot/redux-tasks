import { Link } from "react-router-dom";
import { increment, decrement } from "../../Slice/filesize";
import { useDispatch, useSelector } from 'react-redux'
function Task10() {
    const count = useSelector((state) => state.filesize)
    const dispatch = useDispatch()
    function changeCount1() {
        dispatch(increment())
    }
    function changeCount2() {
        dispatch(decrement())
    }
    return (
        <>
            <h1>Задача№10</h1>
            <p>. Создайте компонент, который позволяет пользователю управлять размером
                текста на странице с помощью кнопок "увеличить" и "уменьшить".
            </p>
            <p style={{ fontSize: count }}>text</p>
            <button onClick={changeCount1}>+1</button>
            <button onClick={changeCount2}>-1</button>
            <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
        </>
    );
}

export default Task10;