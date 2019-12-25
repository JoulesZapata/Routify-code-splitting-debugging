
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, a as init, s as safe_not_equal, d as dispatch_dev, z as element, H as space, A as add_location, b as insert_dev, n as noop, j as detach_dev } from './index-4e59569a.js';

/* src\pages\example\aliasing\v1.1\feature2.svelte generated by Svelte v3.16.4 */

const file = "src\\pages\\example\\aliasing\\v1.1\\feature2.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let b;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Feature 2";
			t1 = space();
			b = element("b");
			b.textContent = "v1.1 feature";
			add_location(h1, file, 0, 0, 0);
			add_location(b, file, 2, 0, 22);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, b, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(b);
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

class Feature2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Feature2",
			options,
			id: create_fragment.name
		});
	}
}

export default Feature2;
//# sourceMappingURL=feature2-889d6f8f.js.map
