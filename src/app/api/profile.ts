// @flow

import { users } from '../data/users';

export enum MembershipRole {
    Freelancer = 'freelancer',
    Author = 'author',
    Admin = 'admin',
}

export interface Facteon$User {
    name: string;
    role: string;
    email: string;
    verified: boolean;
}

export function getUsers(): Promise<Array<Facteon$User>> {
    return Promise.resolve(users);
}
