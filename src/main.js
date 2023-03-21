import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import PageTittle from '@/components/PageTittle.vue';

import router from './router';
import App from './App.vue';

import './assets/scss/all.scss';

import 'bootstrap/dist/js/bootstrap';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(LoadingPlugin);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('PageTittle', PageTittle);
app.mount('#app');
