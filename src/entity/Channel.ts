import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Channel extends BaseEntity {
	@ObjectIdColumn()
	id: ObjectID;

	@Column("text")
	@Field()
	name: string;

	@Column("text")
	@Field()
	teamId: string;

	@Column("text")
	@Field()
	public: boolean;
}
