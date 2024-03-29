
import { Attribute } from "./Attribute";
import { AttributeType } from "./AttributeType";

export class NameAttribute extends Attribute {
    public name: string;

    public constructor(name: string) {
        super(AttributeType.Name);
        this.name = name;
    }

    public toString() {
        let str = super.toString();
        str += "\n\tValue: " + this.name;
        return str;
    }
}
