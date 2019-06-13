import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { PayloadText } from "./PayloadText";
import { PayloadImage } from "./PayloadImage";
import { IResource } from "./IResource";

@ObjectType()
@Entity()
export class Message extends BaseEntity implements IResource {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	@Field()
	userId: string;

	@Column()
	@Field()
	channelId: string;

	@Column()
	@Field(() => PayloadText || PayloadImage)
	payload: PayloadText | PayloadImage;

	@Column()
	@Field()
	timestamp: Date;
}
