
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'knave-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
	}
});
