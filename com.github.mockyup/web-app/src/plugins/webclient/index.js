import axios from 'axios';
export default {
    install(app, options) {
        app.config.globalProperties.$http = axios;
    }
};
//# sourceMappingURL=index.js.map