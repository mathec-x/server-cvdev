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

exports.contacts = {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
}

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