import 'socket.io'
import 'express'
import 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

type Names = 'user' | 'cadidates' | 'skills';
type Types = `${Names}:mount` | `${Names}:merge` | `${Names}:create` | `${Names}:will:update` | `${Names}:update` | `${Names}:will:delete` | `${Names}:delete`;

type DefaultEventsMap = "dispatch" | "unsubscribe" | "subscribe" |  "refresh";
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
        uuid: string,
        browser: string,
        os: string,
        platform: string,
        ip: string 
    }
}

declare module 'express' {
    interface Response {
        toSubscribe(): Express.Response
        to(to: string | string[]): Express.Response
        dispatch(type: Types, payload: any): Express.Response
        $emit(event: DefaultEventsMap, data: any): void
    }
    interface Request {
        socketId?: string
        user?: JwtPayload
        subscription?: string
        terminal: "api" | "app"
    }
}
