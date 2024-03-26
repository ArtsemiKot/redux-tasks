import { Link } from "react-router-dom";

function Home() {
    return ( 
        <>
        <h1>Задания</h1>
        <p><Link to ='/task1'>Задача№1</Link></p>
        <p><Link to ='/task2'>Задача№2</Link></p>
        <p><Link to ='/task3'>Задача№3</Link></p>
        <p><Link to ='/task9'>Задача№9</Link></p>
        <p><Link to ='/task10'>Задача№10</Link></p>
        <p><Link to ='/task11'>Задача№11</Link></p>
        <p><Link to ='/task12'>Задача№12</Link></p>
        </>
     );
}

export default Home;