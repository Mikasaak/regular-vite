import Regular from 'regularjs'

import Child from "../component/Child.js";
import Father from "../component/Father.js";
import Counter from "../component/Counter.js";

Regular.component('Father', Father)
Regular.component('Child', Child)
Regular.component('Counter', Counter)


export default Regular