
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, a as init, s as safe_not_equal, d as dispatch_dev, J as create_slot, v as validate_store, c as component_subscribe, z as element, D as text, H as space, E as attr_dev, A as add_location, B as set_style, b as insert_dev, C as append_dev, K as get_slot_context, L as get_slot_changes, t as transition_in, f as transition_out, j as detach_dev } from './index-4e59569a.js';
import { u as url } from './index-5bd4e51a.js';

/* src\pages\example\nesting\child\_layout.svelte generated by Svelte v3.16.4 */
const file = "src\\pages\\example\\nesting\\child\\_layout.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let a;
	let t0;
	let a_href_value;
	let t1;
	let current;
	const default_slot_template = /*$$slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			a = element("a");
			t0 = text("Grandchild");
			t1 = space();
			if (default_slot) default_slot.c();
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[0]("./grandchild"));
			add_location(a, file, 18, 4, 354);
			attr_dev(div0, "class", "card svelte-1d2az7g");
			add_location(div0, file, 17, 2, 330);
			set_style(div1, "text-align", "center");
			add_location(div1, file, 16, 0, 293);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, a);
			append_dev(a, t0);
			append_dev(div0, t1);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (!current || dirty[0] & /*$url*/ 1 && a_href_value !== (a_href_value = /*$url*/ ctx[0]("./grandchild"))) {
				attr_dev(a, "href", a_href_value);
			}

			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 2) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (default_slot) default_slot.d(detaching);
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
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$url" in $$props) url.set($url = $$props.$url);
	};

	return [$url, $$scope, $$slots];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment.name
		});
	}
}

export default Layout;
//# sourceMappingURL=_layout-3c28743d.js.map