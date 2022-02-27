/** type { import('@prisma/client').Prisma.AddressArgs } */
exports.address = {
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

/** type { import('@prisma/client').Prisma.ContactArgs } */
exports.contacts = {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
}

/** type { import('@prisma/client').Prisma.CandidateArgs } */
exports.candidates = {
    select: {
        email: true,
        image: true,
        name: true,
        nick: true,
        uuid: true,
        address: this.address,
        contacts: this.contacts
    }
}

/** type { import('@prisma/client').Prisma.UserArgs } */
exports.user = {
    select: {
        email: true,
        uuid: true,
        candidates: this.candidates
    }
}