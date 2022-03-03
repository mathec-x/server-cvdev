
/**
 * @typedef {import('@prisma/client').Prisma} Prisma
 */

exports.address = /** @type { Prisma.AddressArgs } */ {
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
exports.contacts = /** @type { Prisma.ContactArgs } */ {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
}

exports.libs = {
    select: {
        uuid: true,
        title: true,
        tag: true
    }
}
exports.skills = /** @type { Prisma.SkillArgs } */ {
    select: {
        uuid: true,
        title: true,
        tag: true,
        libs: this.libs
    }
}

exports.jobs = /** @type { Prisma.JobArgs } */ {
    select: {
        uuid: true,
        occupation: true,
        begin: true,
        finish: true,
        description: true,
        company: true,
        skills: this.skills
    }
}

exports.candidates = /** @type { Prisma.CandidateArgs } */ {
    select: {
        email: true,
        image: true,
        name: true,
        nick: true,
        uuid: true,
        address: this.address,
        contacts: this.contacts,
        jobs: this.jobs
    }
}


exports.user = /** @type { Prisma.UserArgs }*/ {
    select: {
        email: true,
        uuid: true,
        candidates: this.candidates
    }
}