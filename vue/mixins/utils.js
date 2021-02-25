import { normalize } from "../../js";

export const utilsMixin = {
    methods: {
        /**
         * Generates a string that describes the time elapsed since the
         * provided time until the current time.
         *
         * @param {Number} timestamp The timestamp to be used in the in the
         * generation of the distance time string.
         * @returns {String} A descriptive time string to be used to describe
         * the time that has past.
         */
        timeSince(timestamp) {
            const timeElapsed = new Date() - timestamp;
            if (timeElapsed <= 60000) {
                return "Just now";
            } else if (timeElapsed <= 3600000) {
                return `${Math.floor(timeElapsed / 60000)}min ago`;
            } else if (timeElapsed <= 86400000) {
                return `${Math.floor(timeElapsed / 3600000)}h ago`;
            } else {
                const days = Math.floor(timeElapsed / 86400000);
                return days < 2 ? "Yesterday" : `${days} days ago`;
            }
        }
    }
};
