import 'socket.io'
import 'express'
import 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

type Names = 'user' | 'candidate' | 'cadidates' | 'skills';
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
        user?: JwtPayload
    }
    interface Namespace { }
}

declare module "jsonwebtoken" {
    interface JwtPayload {
        uuid: string,
        browser: string,
        os: string,
        platform: string,
        ip: string,
        token: string
    }
}

declare module 'express' {
    interface Response {
        to(to: string | string[]): Response
        dispatch(type: Types, payload: any): Response
        $emit(event: DefaultEventsMap, data: any): void
    }
    interface Request {
        socketId?: string
        user?: JwtPayload
        subscription?: string
        terminal: "api" | "app"
    }
}
