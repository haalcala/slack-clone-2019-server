import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	@Field()
	userId: string;

	@Column()
	@Field()
	channelId: string;

	@Column()
	@Field()
	payload: string;

	@Column()
	@Field()
	timestamp: Date;
}
