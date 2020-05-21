import * as req from "request-promise-native";
import * as handleBars from "handlebars";
export default class Exercise {
    constructor() {
        this.users = [];
        this.tableTemplate = "";
    }

    /**
     * Initialize
     *
     */
    async init() {
        //Need to await since fetch is async (it goes and does it's thing while the program continues)
        this.users = await this.getUsers();

        //Select table template html as a string from templates
        this.tableTemplate = this.getTemplates();

        //Bind events to buttons
        this.bindEvents();

        //Sort Data Alphabetically by username or anything else
        this.sortUsers(this.users);

        //Render Data
        this.render();
    }

    bindEvents() {
        //For bonus points add event listener to the button to re-sort asc->desc order and vice versa
        let sortButton = document.getElementById("sortButton");
    }

    render() {
        let data = { users: this.users };
        let tableContainer = document.getElementById("tableContainer");
        //You will need to edit ex1.mustache to render the correct data
        const template = handleBars.compile(this.tableTemplate);

        tableContainer.innerHTML = template(data);

    }

    /**
     * Get template for table
     */
    getTemplates() {
        return document.querySelector("#tableTemplate").innerHTML;
    }

    /**
     * Sort the array of users
     *
     * @param userList {Array} of JSON Objects
     * @param property {String} used for sorting
     *@return {Array} | {number} sorted by property
     */
    sortUsers(userList, property='username'){

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
     * Fetch users from 'https://jsonplaceholder.typicode.com/users'
     * @returns {String}
     */
    async getUsers(){

        const options = {
            uri: "https://jsonplaceholder.typicode.com/users",
            json: true
        };
        return req.get(options);
    };
}
