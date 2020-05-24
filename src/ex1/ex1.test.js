import {getUsers, sortUsers} from "./ex1.js";
import {userList, userListSorted} from "./ex1.testCases";
import {beforeAll, describe, expect, it} from "@jest/globals";

describe("getUsers function", () => {
    let response;
    beforeAll( async () => {
        response = await getUsers();
    });
    describe("response", () => {
        it("should not be undefined", () => {
            expect(response).toBeDefined();
        });
    });
});

describe("sortUser function", () => {
    it("should sort by username when given no parameters",  () => {
        const expected = userListSorted;
        const actual = sortUsers(userList);

        expect(actual).toStrictEqual(expected);
    });
    it('should sort by username when given "username" parameters',  () => {
        const expected = userListSorted;
        const actual = sortUsers(userList, "username");

        expect(actual).toStrictEqual(expected);
    });
    it('should sort by name when given "name" parameter', () => {
        const expected = userListSorted;
        const actual = sortUsers(userList, "name");

        expect(actual).toStrictEqual(expected);
    });
    it('should sort by email when given "email" parameter', () => {
        const expected = userListSorted;
        const actual = sortUsers(userList, "email");

        expect(actual).toStrictEqual(expected);
    });
    it('should sort by phone when given "phone" parameter', () => {
        const expected = userListSorted;
        const actual = sortUsers(userList, "phone");

        expect(actual).toStrictEqual(expected);
    });
    it("should return -1 when given an invalid parameter", () => {
        const expected = [-1];
        const actual = sortUsers(userList, "notValid");

        expect(actual).toStrictEqual(expected);
    });
});

