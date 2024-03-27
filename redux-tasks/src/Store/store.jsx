import { configureStore } from "@reduxjs/toolkit";
import counter1 from "../Slice/counter1";
import counter2 from "../Slice/counter2";
import getinput from "../Slice/getinput";
import validPas from "../Slice/validPas";
import filesize from "../Slice/filesize";
import getlanguage from "../Slice/getlanguage";
import listtasks from "../Slice/listtasks";
import palindrom from "../Slice/palindrom";
import palindrom2 from "../Slice/palindrom2";
const store = configureStore({
    reducer: {
        counter1: counter1,
        counter2: counter2,
        getinput: getinput,
        validPas: validPas,
        filesize: filesize,
        getlanguage: getlanguage,
        listtasks:listtasks,
        palindrom:palindrom,
        palindrom2:palindrom2,
    }
})

export default store