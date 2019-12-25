
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { n as noop, s as safe_not_equal, r as run_all, i as is_function, g as getContext, S as SvelteComponentDev, a as init$1, d as dispatch_dev, h as handle_promise, v as validate_store, c as component_subscribe, e as empty, b as insert_dev, t as transition_in, f as transition_out, j as detach_dev, k as setContext, l as assign, m as create_component, o as mount_component, p as get_spread_update, q as get_spread_object, u as group_outros, w as destroy_component, x as check_outros, y as listen_dev } from './index-4e59569a.js';

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop;
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}

const route = writable({});

const params = derived(route, route => route.params);

const leftover = {
    subscribe(listener) {
        return derived(getContext('routify'),
            context => context.leftover
        ).subscribe(listener)
    }
};

const url = {
    subscribe(listener) {
        return derived(getContext('routify'),
            context => context.url
        ).subscribe(listener)
    }
};

const goto = {
    subscribe(listener) {
        return derived(getContext('routify'),
            context => context.goto
        ).subscribe(listener)
    }
};

const isActive = {
    subscribe(listener) {
        return derived(getContext('routify'),
            context => context.isActive
        ).subscribe(listener)
    }
};

function _isActive(context, route){
    const url = _url(context, route);
    return function (path, keepIndex = true) {
        path = url(path, null, keepIndex);
        const currentPath = url(route.url, null, keepIndex);
        return currentPath.includes(path)
    }
}

function _goto(context, route) {
    const url = _url(context, route);
    return function goto(path, params, _static, shallow) {
        const href = url(path, params);
        if(!_static)
            history.pushState({}, null, href);
        else
            dispatchEvent(new CustomEvent('routifyupdatepage', {detail: {url: href, shallow}}));
    }
}

function _url(context, route) {
    return function url(path, params, preserveIndex) {
        path = path || ('./');

        if (!preserveIndex)
            path = path.replace(/index$/, '');

        if (path.match(/^\.\.?\//)) {
            //RELATIVE PATH
            // get component's dir
            // let dir = context.path.replace(/[^\/]+$/, '')
            let dir = context.path;
            // traverse through parents if needed
            const traverse = path.match(/\.\.\//g);
            if (traverse)
                for (let i = 1; i <= traverse.length; i++) {
                    dir = dir.replace(/\/[^\/]+\/?$/, '');
                }

            // strip leading periods and slashes
            path = path.replace(/^[\.\/]+/, '');
            dir = dir.replace(/\/$/, '') + '/';
            path = dir + path;
        } else if (path.match(/^\//)) ;

        params = Object.assign({}, route.params, context.params, params);
        for (const [key, value] of Object.entries(params)) {
            path = path.replace(`:${key}`, value);
        }
        return path
    }
}

/* node_modules\@sveltech\routify\runtime\Route.svelte generated by Svelte v3.16.4 */

// (1:0) <script>    import { setContext }
function create_catch_block(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(1:0) <script>    import { setContext }",
		ctx
	});

	return block;
}

// (38:0) {:then component}
function create_then_block(ctx) {
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [{ scoped: /*scoped*/ ctx[0] }, /*layout*/ ctx[1].params];
	var switch_value = /*component*/ ctx[9];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: {
				default: [
					create_default_slot,
					({ scoped: scopeToChild }) => ({ 3: scopeToChild }),
					({ scoped: scopeToChild }) => [scopeToChild ? 8 : 0]
				]
			},
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch_instance_changes = (dirty[0] & /*scoped, layout*/ 3)
			? get_spread_update(switch_instance_spread_levels, [
					dirty[0] & /*scoped*/ 1 && ({ scoped: /*scoped*/ ctx[0] }),
					dirty[0] & /*layout*/ 2 && get_spread_object(/*layout*/ ctx[1].params)
				])
			: {};

			if (dirty[0] & /*$$scope, remainingLayouts, scoped, scopeToChild*/ 1037) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[9])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(38:0) {:then component}",
		ctx
	});

	return block;
}

// (44:2) {#if remainingLayouts.length}
function create_if_block(ctx) {
	let current;

	const route_1 = new Route({
			props: {
				layouts: /*remainingLayouts*/ ctx[2],
				scoped: {
					.../*scoped*/ ctx[0],
					.../*scopeToChild*/ ctx[3]
				}
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(route_1.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(route_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const route_1_changes = {};
			if (dirty[0] & /*remainingLayouts*/ 4) route_1_changes.layouts = /*remainingLayouts*/ ctx[2];

			if (dirty[0] & /*scoped, scopeToChild*/ 9) route_1_changes.scoped = {
				.../*scoped*/ ctx[0],
				.../*scopeToChild*/ ctx[3]
			};

			route_1.$set(route_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(route_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(route_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(route_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(44:2) {#if remainingLayouts.length}",
		ctx
	});

	return block;
}

// (39:0) <svelte:component    this={component}    let:scoped={scopeToChild}    {scoped}    {...layout.params}>
function create_default_slot(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*remainingLayouts*/ ctx[2].length && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*remainingLayouts*/ ctx[2].length) {
				if (if_block) {
					if_block.p(ctx, dirty);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(39:0) <svelte:component    this={component}    let:scoped={scopeToChild}    {scoped}    {...layout.params}>",
		ctx
	});

	return block;
}

// (37:27)   {:then component}
function create_pending_block(ctx) {
	const block = {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(37:27)   {:then component}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 9,
		blocks: [,,,]
	};

	handle_promise(promise = /*layout*/ ctx[1].component(), info);

	const block = {
		c: function create() {
			await_block_anchor = empty();
			info.block.c();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			info.ctx = ctx;

			if (dirty[0] & /*layout*/ 2 && promise !== (promise = /*layout*/ ctx[1].component()) && handle_promise(promise, info)) ; else {
				const child_ctx = ctx.slice();
				child_ctx[9] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(info.block);
			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
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
	let $route;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(6, $route = $$value));
	let { layouts = [] } = $$props, { scoped = {} } = $$props;
	let scopeToChild;
	let _context;
	let props = {};

	function updateContext(layout) {
		const { path, params } = layout;
		_context = _context || writable({});

		_context.set({
			route: $route,
			path,
			params,
			url: _url(layout, $route),
			goto: _goto(layout, $route),
			isActive: _isActive(layout, $route),
			leftover: $route.leftover
		});

		setContext("routify", _context);
	}

	const writable_props = ["layouts", "scoped"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Route> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("layouts" in $$props) $$invalidate(4, layouts = $$props.layouts);
		if ("scoped" in $$props) $$invalidate(0, scoped = $$props.scoped);
	};

	$$self.$capture_state = () => {
		return {
			layouts,
			scoped,
			scopeToChild,
			_context,
			props,
			layout,
			remainingLayouts,
			$route
		};
	};

	$$self.$inject_state = $$props => {
		if ("layouts" in $$props) $$invalidate(4, layouts = $$props.layouts);
		if ("scoped" in $$props) $$invalidate(0, scoped = $$props.scoped);
		if ("scopeToChild" in $$props) $$invalidate(3, scopeToChild = $$props.scopeToChild);
		if ("_context" in $$props) _context = $$props._context;
		if ("props" in $$props) props = $$props.props;
		if ("layout" in $$props) $$invalidate(1, layout = $$props.layout);
		if ("remainingLayouts" in $$props) $$invalidate(2, remainingLayouts = $$props.remainingLayouts);
		if ("$route" in $$props) route.set($route = $$props.$route);
	};

	let layout;
	let remainingLayouts;

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*layouts*/ 16) {
			 $$invalidate(1, [layout, ...remainingLayouts] = layouts, layout, ($$invalidate(2, remainingLayouts), $$invalidate(4, layouts)));
		}

		if ($$self.$$.dirty[0] & /*layout*/ 2) {
			 updateContext(layout);
		}
	};

	return [scoped, layout, remainingLayouts, scopeToChild, layouts];
}

class Route extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init$1(this, options, instance, create_fragment, safe_not_equal, { layouts: 4, scoped: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Route",
			options,
			id: create_fragment.name
		});
	}

	get layouts() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set layouts(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scoped() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scoped(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function init (routes, cb) {
['pushState', 'replaceState'].forEach(eventName => {
      const fn = history[eventName];
      history[eventName] = function (state, title, url) {
        const event = Object.assign(
          new Event(eventName.toLowerCase(), { state, title, url })
        );
        Object.assign(event, { state, title, url });

        fn.apply(this, [state, title, url]);
        return dispatchEvent(event)
      };
    });

  function updatePage(url, shallow) {
    const currentUrl = window.location.pathname;
    url = url || currentUrl;

    let route$1 = urlToRoute(url, routes);
    let currentRoute = shallow && urlToRoute(currentUrl, routes);
    let contextRoute = currentRoute || route$1;
    const layouts = [...contextRoute.layouts, route$1];

    //set the route in the store
    route.set(route$1);

    //run callback in Router.svelte
    cb({ layouts, route: route$1 });
  }

  function click(event) {
    const el = event.target.closest('a');
    const href = el && el.getAttribute('href');

    if (
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.shiftKey ||
      event.button ||
      event.defaultPrevented
    )
      return
    if (!href || el.target || el.host !== location.host) return

    event.preventDefault();
    history.pushState({}, '', href);
  }

  return {updatePage, click}
}


function urlToRoute(url, routes) {
  const fallbacks = routes.filter(route => route.isFallback);
  routes = routes.filter(route => !route.isFallback);
  const urlWithIndex = url.match(/\/index\/?$/)
    ? url
    : (url + '/index').replace(/\/+/g, '/'); //remove duplicate slashes
  const urlWithSlash = (url + '/').replace(/\/+/g, '/');

  const route =
    routes.filter(route => urlWithIndex.match(route.regex))[0] ||
    routes.filter(route => url.match(route.regex))[0] ||
    fallbacks.filter(route => urlWithSlash.match(route.regex))[0] ||
    fallbacks.filter(route => url.match(route.regex))[0];

  if (!route)
    throw new Error(
      `Route could not be found. Make sure ${url}.svelte or ${url}/index.svelte exists. A restart may be required.`
    )

  const regexUrl = route.regex.match(/\/index$/) ? urlWithIndex : url;

  const params = {};
  if (route.paramKeys) {
    regexUrl.match(route.regex).forEach((match, i) => {
      if (i === 0) return
      const key = route.paramKeys[i - 1];
      params[key] = match;
    });
  }

  route.params = params;

  const match = url.match(route.regex + '(.+)');
  route.leftover = (match && match[1]) || '';

  return route
}

/* node_modules\@sveltech\routify\runtime\Router.svelte generated by Svelte v3.16.4 */

function create_fragment$1(ctx) {
	let current;
	let dispose;

	const route_1 = new Route({
			props: { layouts: /*layouts*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(route_1.$$.fragment);

			dispose = [
				listen_dev(window, "pushstate", /*pushstate_handler*/ ctx[5], false, false, false),
				listen_dev(window, "popstate", /*popstate_handler*/ ctx[6], false, false, false),
				listen_dev(window, "replacestate", /*replacestate_handler*/ ctx[7], false, false, false),
				listen_dev(window, "click", /*click*/ ctx[2], false, false, false)
			];
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(route_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const route_1_changes = {};
			if (dirty[0] & /*layouts*/ 1) route_1_changes.layouts = /*layouts*/ ctx[0];
			route_1.$set(route_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(route_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(route_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(route_1, detaching);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { routes } = $$props;
	let layouts, route;
	const { updatePage, click } = init(routes, update => $$invalidate(0, { layouts, route } = update, layouts));
	updatePage();

	addEventListener("routifyupdatepage", ({ detail }) => {
		updatePage(detail.url, detail.shallow);
	});

	const writable_props = ["routes"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Router> was created with unknown prop '${key}'`);
	});

	const pushstate_handler = () => updatePage();
	const popstate_handler = () => updatePage();
	const replacestate_handler = () => updatePage();

	$$self.$set = $$props => {
		if ("routes" in $$props) $$invalidate(3, routes = $$props.routes);
	};

	$$self.$capture_state = () => {
		return { routes, layouts, route };
	};

	$$self.$inject_state = $$props => {
		if ("routes" in $$props) $$invalidate(3, routes = $$props.routes);
		if ("layouts" in $$props) $$invalidate(0, layouts = $$props.layouts);
		if ("route" in $$props) route = $$props.route;
	};

	return [
		layouts,
		updatePage,
		click,
		routes,
		route,
		pushstate_handler,
		popstate_handler,
		replacestate_handler
	];
}

class Router extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { routes: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Router",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*routes*/ ctx[3] === undefined && !("routes" in props)) {
			console.warn("<Router> was created without expected prop 'routes'");
		}
	}

	get routes() {
		throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set routes(value) {
		throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Router as R, goto as g, isActive as i, leftover as l, params as p, route as r, url as u };
//# sourceMappingURL=index-5bd4e51a.js.map
