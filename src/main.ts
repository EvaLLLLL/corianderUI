import {createApp} from 'vue';
// @ts-ignore
import App from './App.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router';
import 'github-markdown-css';
// @ts-ignore
import Home from './views/Home.vue';
// @ts-ignore
import Doc from './views/Doc.vue';
// @ts-ignore
import SwitchDemo from './components/SwitchDemo.vue';
// @ts-ignore
import ButtonDemo from './components/ButtonDemo.vue';
// @ts-ignore
import DialogDemo from './components/DialogDemo.vue';
// @ts-ignore
import TabsDemo from './components/TabsDemo.vue';
// @ts-ignore
import MenuDemo from './components/MenuDemo.vue';
// @ts-ignore
import {h} from 'vue';
// @ts-ignore
import Markdown from './components/Markdown.vue';
// @ts-ignore
import intro from './markdown/intro.md';
// @ts-ignore
import getStarted from './markdown/getStarted.md';
// @ts-ignore
import install from './markdown/install.md';

const md = (string) => {
	return h(Markdown, {content: string, key: string});
};

const history = createWebHashHistory();
export const router = createRouter({
	history: history,
	routes: [
		{path: '/', component: Home},
		{
			path: '/doc',
			component: Doc,
			children: [
				{path: '', redirect: 'doc/intro'},
				{path: 'intro', component: md(intro)},
				{path: 'install', component: md(install)},
				{path: 'get-started', component: md(getStarted)},
				{path: 'switch', component: SwitchDemo},
				{path: 'button', component: ButtonDemo},
				{path: 'dialog', component: DialogDemo},
				{path: 'tabs', component: TabsDemo},
				{path: 'menu', component: MenuDemo},
			],
		},
	],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
