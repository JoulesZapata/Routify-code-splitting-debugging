
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, a as init, s as safe_not_equal, d as dispatch_dev, z as element, A as add_location, B as set_style, b as insert_dev, C as append_dev, n as noop, j as detach_dev } from './index-4e59569a.js';

/* src\pages\example\nesting\index.svelte generated by Svelte v3.16.4 */

const file = "src\\pages\\example\\nesting\\index.svelte";

function create_fragment(ctx) {
	let div;
	let h1;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = "I'm src/pages/example/nesting/index.svelte";
			add_location(h1, file, 1, 2, 36);
			set_style(div, "text-align", "center");
			add_location(div, file, 0, 0, 0);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Nesting extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Nesting",
			options,
			id: create_fragment.name
		});
	}
}

export default Nesting;
//# sourceMappingURL=index-1715a1ec.js.map