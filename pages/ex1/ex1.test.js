import { expect, use } from 'chai';
import Exercise from './ex1.js';
import {describe, it} from 'mocha';
import {userList, fullList, userListSorted} from "./ex1.testCases";

use(require('chai-as-promised'));

describe('getUsers function', () => {
    let response;
    before( async () => {
        const ex = new Exercise();
        response = await ex.getUsers();
    });
    describe('response', () => {
        it('should not be undefined', () => {
            expect(response).to.be.not.equal(undefined);
        });
    });
});

describe('sortUser function', () => {
    let ex;
    before( async () => {
        ex = new Exercise();
    });
    it('should sort by username when given no parameters',  () => {
        const expected = userListSorted;
        const actual = ex.sortUsers(userList);

        expect(actual).to.be.deep.equal(expected);
    });
    it('should sort by username when given "username" parameters',  () => {
        const expected = userListSorted;
        const actual = ex.sortUsers(userList, 'username');

        expect(actual).to.be.deep.equal(expected);
    });
    it('should sort by name when given "name" parameter', () => {
        const expected = userListSorted;
        const actual = ex.sortUsers(userList, 'name');

        expect(actual).to.be.deep.equal(expected);
    });
    it('should sort by email when given "email" parameter', () => {
        const expected = userListSorted;
        const actual = ex.sortUsers(userList, 'email');

        expect(actual).to.be.deep.equal(expected);
    });
    it('should sort by phone when given "phone" parameter', () => {
        const expected = userListSorted;
        const actual = ex.sortUsers(userList, 'phone');

        expect(actual).to.be.deep.equal(expected);
    });
    it('should return -1 when given an invalid parameter', () => {
        const expected = [-1];
        const actual = ex.sortUsers(userList, 'notValid');

        expect(actual).to.be.deep.equal(expected);
    });
});

