import { ObjectType, ID, Field } from "type-graphql";
import { PayloadBase } from "./PayloadBase";

@ObjectType()
export class PayloadText extends PayloadBase {
	@Field()
	text: string;
}
