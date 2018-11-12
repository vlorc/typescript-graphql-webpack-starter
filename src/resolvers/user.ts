import User from "../entities/user";
import { Resolver, Arg, Query } from "type-graphql";

@Resolver(User)
export default class UserResolver {
    constructor() {

    }

    @Query(returns => User)
    info(@Arg("id") id: string): User {
        return {
            id: +id,
            nickname: "123",
            email: "456",
            password: "789",
        };
    }
}