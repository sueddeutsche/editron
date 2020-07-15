import gp from "gson-pointer";
import { JSONPointer } from "../../types";


export default function getParentPointer(pointer: JSONPointer): JSONPointer {
    const list = gp.split(pointer);
    list.pop();
    return gp.join(list, pointer[0] === "#");
};
