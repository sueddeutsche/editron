import gp from "gson-pointer";
import { JSONPointer } from "../../types";


export default function getParentPointer(pointer: JSONPointer): JSONPointer {
    return gp.join(pointer, "..");
}
