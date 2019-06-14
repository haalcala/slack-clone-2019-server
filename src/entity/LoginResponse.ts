import { ObjectType, Field } from "type-graphql";
import { OAuthUser } from "./OAuthUser";

@ObjectType()
export class LoginResponse {
	@Field({ nullable: false }) user: OAuthUser;

	@Field({ nullable: false }) token: string;

	@Field({ nullable: false }) refreshToken: string;
}
