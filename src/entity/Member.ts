import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Member extends BaseEntity {
	@ObjectIdColumn()
	memberId: ObjectID;

	@Column("text")
	@Field()
	userId: string;
}
