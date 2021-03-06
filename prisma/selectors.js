
/**
 * @typedef {import('@prisma/client').Prisma} Prisma
 */

export const address = /** @type { Prisma.AddressArgs } */ {
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
export const contacts = /** @type { Prisma.ContactArgs } */ {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
}

export const libs = /** @type { Prisma.LibArgs } */  {
    select: {
        uuid: true,
        title: true,
        tag: true
    }
}
export const skills = /** @type { Prisma.SkillArgs } */ {
    select: {
        uuid: true,
        image: true,
        title: true,
        tag: true
    }
}

export const jobs = /** @type { Prisma.JobArgs } */ {
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

export const candidates = /** @type { Prisma.CandidateArgs } */ {
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

export const education = /** @type { Prisma.EducationArgs }*/ {
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

export const language = /** @type { Prisma.LanguageArgs }*/ {
    select: {
        uuid: true,
        title: true,
        level: true
    }
}


export const candidate = /** @type { Prisma.CandidateArgs } */ {
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

export const user = /** @type { Prisma.UserArgs }*/ {
    select: {
        email: true,
        uuid: true,
        super: true,
        candidates: candidates
    }
}