
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, a as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, z as element, H as space, D as text, E as attr_dev, A as add_location, b as insert_dev, C as append_dev, n as noop, j as detach_dev } from './index-4e59569a.js';
import { u as url } from './index-5bd4e51a.js';

/* src\pages\example\reset\index.svelte generated by Svelte v3.16.4 */
const file = "src\\pages\\example\\reset\\index.svelte";

function create_fragment(ctx) {
	let img;
	let img_src_value;
	let t0;
	let a;
	let t1;
	let a_href_value;

	const block = {
		c: function create() {
			img = element("img");
			t0 = space();
			a = element("a");
			t1 = text("Go back");
			if (img.src !== (img_src_value = "/example/kevin.gif")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			attr_dev(img, "class", "center svelte-6x4066");
			add_location(img, file, 14, 0, 227);
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[0]("../../"));
			add_location(a, file, 15, 0, 283);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*$url*/ 1 && a_href_value !== (a_href_value = /*$url*/ ctx[0]("../../"))) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(a);
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

function instance($$self, $$props, $$invalidate) {
	let $url;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$url" in $$props) url.set($url = $$props.$url);
	};

	return [$url];
}

class Reset extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Reset",
			options,
			id: create_fragment.name
		});
	}
}

export default Reset;
//# sourceMappingURL=index-84c63997.js.map