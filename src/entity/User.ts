import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import passport = require("passport");

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@ObjectIdColumn()
	memberId: ObjectID;

	@Column("text")
	@Field()
	username: string;

	@Column("text")
	@Field()
	email: string;

	@Column("text")
	password: string;
}
