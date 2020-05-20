import Vue from 'vue'
import { DropdownSearch, OnClickOutside } from './main'

export default {
	install(Vue, options) {
		Vue.component('DropdownSearch', DropdownSearch)
		Vue.component('OnClickOutside', OnClickOutside)
	}
}