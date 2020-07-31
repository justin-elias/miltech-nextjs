import axios from "axios";

/**
 * Sort the array of users
 *
 * @param userList {Array} of JSON Objects
 * @param property {String} used for sorting
 *@return {Array} | {number} sorted by property
 */
export const sortUsers = (userList, property="username") => {

    let invalidProperty = false;

    // fail fast if the sort property doesn't exist
    userList.map((obj) => {
        if (obj[property] === undefined){
            invalidProperty = true;
        }
    });

    if (invalidProperty) {
        return [-1]
    }

    /**
     * Function to sort an array of objects by some specific key.
     * Modified from example found at: https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
     *
     *  @param {String} property Key of the object to sort.
     * @return {Function}
     */
    function dynamicSort(property){
        let sortOrder = 1;

        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a,b) {
            if (sortOrder === -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    }
    return userList.sort(dynamicSort(property));
};

/**
 * Fetch users from remote. 'https://jsonplaceholder.typicode.com/users' as default
 * @param {String} uri to pull data from
 * @returns {String}
 */
export const getUsers = async (uri= "https://jsonplaceholder.typicode.com/users") => {

    return await axios.get(uri);
};
