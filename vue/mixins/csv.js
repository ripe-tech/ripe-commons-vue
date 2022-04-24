import {
    arraysToCsv,
    arrayToCsv,
    objectsToCsv,
    objectToCsv,
    parseCsv,
    parseCsvFile
} from "ripe-commons";

export const csvMixin = {
    methods: {
        arraysToCsv(data, headers = [], options = {}) {
            return arraysToCsv(data, headers, options);
        },
        arrayToCsv(data, options = {}) {
            return arrayToCsv(data, options);
        },
        objectsToCsv(data, headers = [], options = {}) {
            return objectsToCsv(data, headers, options);
        },
        objectToCsv(data, headers = [], options = {}) {
            return objectToCsv(data, headers, options);
        },
        parseCsv(dataS, options = {}) {
            return parseCsv(dataS, options);
        },
        parseCsvFile(file, options = {}) {
            return parseCsvFile(file, options);
        }
    }
};
