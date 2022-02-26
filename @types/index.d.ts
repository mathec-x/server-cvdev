import 'socket.io'
import 'express'
import 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

type Names = 'user' | 'cadidates';
type Types = `${Names}:mount` | `${Names}:merge` | `${Names}:create` | `${Names}:will:update` | `${Names}:update` | `${Names}:will:delete` | `${Names}:delete`;

type DefaultEventsMap = "dispatch" | "refresh";
type SocketUserResponse = {
    id: string,
    user: User,
    rooms: Set<string>
};

declare module 'socket.io' {
    type EventsMap = DefaultEventsMap
    interface Middleware {
        (this: Namespace, socket: Socket, next: Function): void
    }
    interface Socket {
        user?: jwt.JwtPayload
    }
    interface Namespace { }
}

declare module "jsonwebtoken" {
    interface JwtPayload {
        id: number
        uuid: string
        isActive: boolean
        groupId?: number
        token?: string
    }
}

declare module 'express' {
    interface Response {
        toSubscribe(): Express.Response
        to(to: string | string[]): Express.Response
        dispatch(type: Types, payload: any): Express.Response
    }
    interface Request {
        socketId?: string
        user?: JwtPayload
        subscription?: string
        terminal: "api" | "app"
    }
}
