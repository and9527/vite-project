import Vuex from 'vuex';
import { viewport } from './viewport';
import { browser } from './browser';

export default new Vuex.Store({
	modules: { viewport, browser },
});
