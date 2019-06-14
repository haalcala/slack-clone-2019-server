import { ObjectType, Field } from "type-graphql";
import { OAuthUser } from "./OAuthUser";

@ObjectType()
export class LoginResponse {
    @Field({ nullable: false }) user: OAuthUser;

    @Field({ nullable: true }) token: string | null;

    @Field({ nullable: true }) refreshToken: string | null;
}
