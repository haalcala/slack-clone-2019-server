import { ObjectType, ID, Field } from "type-graphql";
import { PayloadBase } from "./PayloadBase";

@ObjectType()
export class PayloadImage extends PayloadBase {
	@Field()
	url: string;
}
