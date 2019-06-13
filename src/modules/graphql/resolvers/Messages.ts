import { Resolver, Query, Arg } from "type-graphql";
import { Message } from "../../../entity/Message";

@Resolver()
export class Messages {
	@Query(() => [Message])
	async getMessagesByChannelId(@Arg("channelId") channelId: string): Promise<Message[]> {
		return;
	}
}
