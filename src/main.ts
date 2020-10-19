import {createApp} from 'vue';
// @ts-ignore
import App from './App.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router';
// @ts-ignore
import Home from './views/Home.vue';
// @ts-ignore
import Doc from './views/Doc.vue';
// @ts-ignore
import DocDemo from './components/DocDemo.vue';
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
import IntroDemo from './components/IntroDemo.vue';
// @ts-ignore
import InstallDemo from './components/InstallDemo.vue';

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
				{path: 'intro', component: IntroDemo},
				{path: 'install', component: InstallDemo},
				{path: '', component: DocDemo},
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