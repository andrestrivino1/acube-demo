import { GraphQLID, GraphQLList } from "graphql";
import { Users } from "../../entities/users";
import { UserType } from "../type-defs/user";

export const GET_ALL_USERS = {
    type: GraphQLList(UserType),
    async resolve() {
        return await Users.find()
    }
}

export const GET_USER = {
    type: UserType,
    args:{
        id: {type: GraphQLID}
    },
   async resolve(_: any, args: any) {
   const result = await Users.findOne({where: {id: args.id}})
      return result  
    }
}