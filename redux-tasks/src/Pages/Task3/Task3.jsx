import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStr } from "../../Slice/getinput";

function Task3() {
  const inp = useSelector((state) => state.getinput);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Задача 3</h1>
      <p>
        Создайте компонент текстового поля, который позволяет пользователю
        вводить текст и отображает его в реальном времени.
      </p>

      <h1>{inp}</h1>
      <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
      
      <p><Link to='/'>Вернуться к главной странице с задачами</Link></p>
    </>
  );
}

export default Task3;