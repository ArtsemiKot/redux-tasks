import { Link } from "react-router-dom";
import { validPas } from "../../Slice/validPas";
import { useDispatch, useSelector } from 'react-redux'
function Task9() {
    const password = useSelector((state) => state.validPas)
    const dispatch = useDispatch()

    function chekPassword() {
        try {
            if (!/[A-Z]+/gm.test(password)) throw new Error('В пароле отсутствуют большие буквы')
            if (!/[a-z]+/gm.test(password)) throw new Error('В пароле отсутствуют маленькие буквы')
            if (!/[0-9]+/gm.test(password)) throw new Error('В пароле отсутствуют цифры буквы')
            if (password.length < 8) throw new Error('В пароле меньше 8 символов')
            return 'Пароль валидный'
        } catch (error) {
            return error.message
        }
    }
    return (
        <>
            <h1>Задача№9</h1>
            <p>Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
                ввести пароль, который соответствует определенным требованиям (например,
                содержание букв, цифр и специальных символов).
            </p>
            <input onChange={(e) => dispatch(validPas(e.target.value))}></input>
            <button onClick={() => console.log(chekPassword())}>Click me</button>
            <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
        </>
    );
}

export default Task9;