import "./bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import ToastService from "primevue/toastservice";
import StyleClass from "primevue/styleclass";
import "@/sakai-vue-master/assets/styles.scss";
import "primevue/resources/themes/lara-light-teal/theme.css";

const appName = import.meta.env.VITE_APP_NAME || "SAKAI";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, { ripple: true })
            .use(ToastService)
            .directive("ripple", Ripple)
            .directive("styleclass", StyleClass)
            .mount(el);
    },
    progress: {
        color: "#1abc9c",
    },
});
