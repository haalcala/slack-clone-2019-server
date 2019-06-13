import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
export class PayloadBase extends BaseEntity {
	@Field()
	type: string;
}
