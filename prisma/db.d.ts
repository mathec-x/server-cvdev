import { Prisma, PrismaClient } from "@prisma/client";
interface AddressArgsJsonFields extends Prisma.AddressGetPayload<typeof address> {
    jsonfield: {
        latitude: boolean;
        longitude: boolean;
    };
}
export declare const address: Prisma.AddressArgs;
export declare type Address = AddressArgsJsonFields;
export declare type Contacts = Prisma.ContactGetPayload<typeof contacts>;
export declare const contacts: Prisma.ContactArgs;
export declare type Libs = Prisma.LibGetPayload<typeof libs>;
export declare const libs: Prisma.LibArgs;
export declare type Skills = Prisma.SkillGetPayload<typeof skills>;
export declare const skills: Prisma.SkillArgs;
export declare type Jobs = Prisma.JobGetPayload<typeof jobs>;
export declare const jobs: Prisma.JobArgs;
export declare type Candidates = Prisma.CandidateGetPayload<typeof candidates>;
export declare const candidates: Prisma.CandidateArgs;
export declare type Education = Prisma.EducationGetPayload<typeof education>;
export declare const education: Prisma.EducationArgs;
export declare type Language = Prisma.LanguageGetPayload<typeof language>;
export declare const language: Prisma.LanguageArgs;
export declare type Candidate = Prisma.CandidateGetPayload<typeof candidate>;
export declare const candidate: Prisma.CandidateArgs;
export declare type User = Prisma.UserGetPayload<typeof user>;
export declare const user: {
    select: {
        email: boolean;
        uuid: boolean;
        super: boolean;
        candidates: Prisma.CandidateArgs;
    };
};
declare const _default: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
export default _default;
