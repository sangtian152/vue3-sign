import type { App } from 'vue'

import Sign from "./src/sign.vue";

/* istanbul ignore next */
Sign.install = function(app: App) {
  app.component(Sign.name, Sign);
};

export default Sign;
