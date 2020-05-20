<template>
	<div class="wrapper mt-6">
		<div class="row">
			<div class="md-col-4">
				<dropdown-search
					name="bands"
				    :options="newlist"
				    v-model="selectBand"
				    :filter-function="applySearchFilter">
				    <label for="bands" class="form__label font--bold"> Select Band</label>
				    <template slot="list" slot-scope="{option}">
						{{ option.name }}
				    </template>
				</dropdown-search>

				<div class="well">
					{{ selectBand }}
				</div>
			</div>
			<div class="md-col-4">
				<dropdown-search
					name="bands2"
				    :options="newlist"
				    v-model="selectBand2"
				    :filter-function="applySearchFilter">
				    <label for="option" class="form__label font--bold"> Select Band</label>
				</dropdown-search>

				<div class="well">
					{{ selectBand2 }}
				</div>
			</div>
<!-- 			<div class="md-col-4">
				<dropdown-list :options="list" :selected='selected' v-model="selected">
					<template slot="current" slot-scope="{ current }">
						{{ current.name | upper }}
					</template>
					<template slot="option" slot-scope="{ option }">
						{{ option.name | upper }}
					</template>
				</dropdown-list>
				<div class="mt-5 p-5 bg--gray">
					{{ selected }}
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>

	import axios from 'axios'
	
	import DropdownSearch from './DropdownSearch'

	export default {
		name: "App",
		components: {
			DropdownSearch
		},
		data() {
			return {
				lunalist: null,
				selected: 'claude-slug',
				newlist: [],
				loading: false,
				list: [
					{name: "claude", slug: 'claude-slug'},
					{name: "ludi", slug: 'ludi-slug'},
					{name: "zanel", slug: 'zanel-slug'},
					{name: "elzanne", slug: 'elzanne-slug'},
					{name: "claude", slug: 'claude-slug'},
					{name: "ludi", slug: 'ludi-slug'},
					{name: "zanel", slug: 'zanel-slug'},
					{name: "elzanne", slug: 'elzanne-slug'},
					{name: "claude", slug: 'claude-slug'},
					{name: "ludi", slug: 'ludi-slug'},
					{name: "zanel", slug: 'zanel-slug'},
					{name: "elzanne", slug: 'elzanne-slug'},
					{name: "claude", slug: 'claude-slug'},
					{name: "ludi", slug: 'ludi-slug'},
					{name: "zanel", slug: 'zanel-slug'},
					{name: "elzanne", slug: 'elzanne-slug'},
				],
				selectBand: null,
				selectBand2: null,
                bands: [
                    'Anthrax',
                    'Dark Angel',
                    'Death Angel',
                    'Destruction',
                    'Exodus',
                    'Flotsam and Jetsam',
                    'Kreator',
                    'Megadeth',
                    'Ludi Myburgh',
                    'Metallica',
                    'Overkill',
                    'Sepultura',
                    'Slayer',
                    'Testament',
                ]
			}
		},
		filters: {
			upper(value) {
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		},
        methods: {
            applySearchFilter(search, options) {
		        // return options.filter(option => {
		        //     return option.toLowerCase().startsWith(search.toLowerCase())
          //       })

          		return Object.keys(options)
          				.map(name => options[name])
          				.filter(option => {
          					return option.name.toLowerCase().startsWith(search.toLowerCase())
          				})
            },
            async getData() {
            	const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
            	this.newlist = response.data
            	this.loading = true
            }
        },
        mounted() {
        	this.getData()
        }
	}
</script>