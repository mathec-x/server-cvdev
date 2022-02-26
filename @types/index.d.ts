declare module "jsonwebtoken" {
    export interface JwtPayload {
        id: number
        uuid: string
        isActive: boolean
        groupId?: number
        token?: string
    }
}

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
    export interface Middleware {
        (this: Namespace, socket: Socket, next: Function): void
    }
    export interface Socket {
        user?: jwt.JwtPayload
    }
    export interface Namespace { }
}


declare module Express {
    export interface Response {
        toSubscribe(): Express.Response
        to(to: string | string[]): Express.Response
        dispatch(type: Types, payload: any): Express.Response
    }
    export interface Request {
        socketId?: string
        user?: jwt.JwtPayload
        subscription?: string
        terminal: "api" | "app"
    }
}
