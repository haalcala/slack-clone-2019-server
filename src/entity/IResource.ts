import { InterfaceType, ID, Field } from "type-graphql";
import { ObjectID } from "typeorm";

@InterfaceType()
export abstract class IResource {
	@Field(type => ID)
	id: ObjectID;
}
