const Vue = require("vue").default;
const testUtils = require("@vue/test-utils");
const vuex = require("vuex");

const localVue = testUtils.createLocalVue();

localVue.use(vuex);
localVue.prototype.$bus = new Vue();

/**
 * Initializes and mount a custom component.
 *
 * @param {Object} component Custom component to initialize.
 * @param {Object} options An options object with:
 * - 'props' - The props to initialize the component with.
 * - 'route' - Optionally, define the current route for Vue Router.
 * - 'mixins' - Optionally, add or override mixins for the component.
 * - 'mocks' - The set of mocks to apply.
 * - 'provide' - Optionally, add properties for components to use in injections
 * - 'store' - The definition of the Vuex store
 */
const getComponent = function(
    component,
    { props = {}, route = null, mixins = [], mocks = {}, provide = {}, store = {} } = {}
) {
    const options = {
        propsData: props,
        localVue: localVue,
        mixins: mixins,
        mocks: mocks,
        provide: provide,
        store: new vuex.Store(store)
    };
    if (route) {
        options.mocks.$route = route;
    }
    const wrapper = testUtils.mount(component, options);
    return wrapper;
};

module.exports = {
    getComponent: getComponent
};
