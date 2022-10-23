import { PrismaClient } from '@prisma/client';

var address = {
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
};
var contacts = {
    select: {
        uuid: true,
        name: true,
        phone: true
    }
};
var libs = {
    select: {
        uuid: true,
        title: true,
        tag: true
    }
};
var skills = {
    select: {
        uuid: true,
        image: true,
        title: true,
        tag: true
    }
};
var jobs = {
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
};
var candidates = {
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
};
var education = {
    select: {
        uuid: true,
        institution: true,
        course: true,
        begin: true,
        finish: true,
        image: true,
        site: true
    }
};
var language = {
    select: {
        uuid: true,
        title: true,
        level: true
    }
};
var candidate = {
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
};
var user = {
    select: {
        email: true,
        uuid: true,
        "super": true,
        candidates: candidates
    }
};
var db = new PrismaClient();

export { address, candidate, candidates, contacts, db as default, education, jobs, language, libs, skills, user };
