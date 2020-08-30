// @flow

import { users } from '../data/users'

export enum MembershipRole {
    Freelancer = 'freelancer',
    Author = 'author',
    Admin = 'admin',
}

export interface Kinja$User {
    name: string,
    role: string,
    email: string,
    verified: boolean
}

export function getUsers(): Promise<Array<Kinja$User>> {
    return Promise.resolve(users);
}