import { Link } from "react-router-dom";
import { getlang } from "../../Slice/getlanguage";
import { useDispatch, useSelector } from 'react-redux'
function Task11() {
    const arr = {
        rus: {
            header: "Типы данных",
            description: 'Описание типов данных'
        },
        en: {
            header: "Data types",
            description: 'Data types description'
        },
    }

    const lang = useSelector((state) => state.getlanguage)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Задача№11</h1>
            <p>Создайте компонент, который позволяет пользователю выбирать язык
                интерфейса. При выборе языка текст на странице должен изменяться
                соответствующим образом.
            </p>
            <button onClick={() => dispatch(getlang('rus'))}>rus</button>
            <button onClick={() => dispatch(getlang('en'))}>en</button>
            <p>{arr[lang]?.header}</p>
            <p>{arr[lang]?.description}</p>
            <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
        </>
    );
}

export default Task11;