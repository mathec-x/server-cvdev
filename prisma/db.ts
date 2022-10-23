import { Prisma, PrismaClient } from "@prisma/client"

interface AddressArgsJsonFields extends Prisma.AddressGetPayload<typeof address> {
    jsonfield: {
        latitude: boolean
        longitude: boolean
    }
}

export const address: Prisma.AddressArgs = {
    select: {
        cep: true,
        city: true,
        complement: true,
        neighborhood: true,
        number: true,
        street: true,
        uf: true,
        uuid: true
    }
}
export type Address = AddressArgsJsonFields

export type Contacts = Prisma.ContactGetPayload<typeof contacts>
export const contacts: Prisma.ContactArgs = {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
}

export type Libs = Prisma.LibGetPayload<typeof libs>
export const libs: Prisma.LibArgs = {
    select: {
        uuid: true,
        title: true,
        tag: true
    }
}

export type Skills = Prisma.SkillGetPayload<typeof skills>
export const skills: Prisma.SkillArgs = {
    select: {
        uuid: true,
        image: true,
        title: true,
        tag: true
    }
}

export type Jobs = Prisma.JobGetPayload<typeof jobs>
export const jobs: Prisma.JobArgs = {
    select: {
        uuid: true,
        occupation: true,
        begin: true,
        finish: true,
        image: true,
        site: true,
        description: true,
        company: true,
        skills: skills
    }
}

export type Candidates = Prisma.CandidateGetPayload<typeof candidates>
export const candidates: Prisma.CandidateArgs = {
    select: {
        email: true,
        image: true,
        name: true,
        nick: true,
        uuid: true,
        about: true,
        jobs: {
            select: {
                skills: skills
            }
        }
    }
}

export type Education = Prisma.EducationGetPayload<typeof education>
export const education: Prisma.EducationArgs = {
    select: {
        uuid: true,
        institution: true,
        course: true,
        begin: true,
        finish: true,
        image: true,
        site: true
    }
}

export type Language = Prisma.LanguageGetPayload<typeof language>
export const language: Prisma.LanguageArgs = {
    select: {
        uuid: true,
        title: true,
        level: true
    }
}

export type Candidate = Prisma.CandidateGetPayload<typeof candidate>
export const candidate: Prisma.CandidateArgs = {
    select: {
        email: true,
        birthday: true,
        image: true,
        name: true,
        nick: true,
        uuid: true,
        about: true,
        links: true,
        addressLine: true,
        address: address,
        contacts: contacts,
        jobs: jobs,
        libs: libs,
        educations: education,
        languages: language
    }
}

export type User = Prisma.UserGetPayload<typeof user>
export const user: Prisma.UserArgs = {
    select: {
        email: true,
        uuid: true,
        super: true,
        candidates: candidates
    }
}

export default new PrismaClient();