
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, a as init, d as dispatch_dev, s as safe_not_equal, m as create_component, o as mount_component, n as noop, t as transition_in, f as transition_out, w as destroy_component } from './index-4e59569a.js';
import { R as Router } from './index-5bd4e51a.js';

const routes = [
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/nesting/child/grandchild/index",
  "regex": "^/example/nesting/child/grandchild/index",
  "name": "grandchild/index",
  "ranking": "ZZZZZZ",
  "url": "/example/nesting/child/grandchild/index",
  "component": () => import('./index-90be360d.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/",
      "url": "/example/nesting/",
      "filepath": "/example/nesting/_layout.svelte",
      "component": () => import('./_layout-48613285.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/child/",
      "url": "/example/nesting/child/",
      "filepath": "/example/nesting/child/_layout.svelte",
      "component": () => import('./_layout-3c28743d.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/child/grandchild/",
      "url": "/example/nesting/child/grandchild/",
      "filepath": "/example/nesting/child/grandchild/_layout.svelte",
      "component": () => import('./_layout-0473f637.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/modal/basic/index",
  "regex": "^/example/modal/basic/index",
  "name": "basic/index",
  "ranking": "ZZZZZ",
  "url": "/example/modal/basic/index",
  "component": () => import('./index-2242bac0.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/modal/",
      "url": "/example/modal/",
      "filepath": "/example/modal/_layout.svelte",
      "component": () => import('./_layout-2b2905ea.js').then(m => m.default)
    },
    {
      "path": "/example/modal/basic/",
      "url": "/example/modal/basic/",
      "filepath": "/example/modal/basic/_layout.svelte",
      "component": () => import('./_layout-0c625f07.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1/index",
  "regex": "^/example/aliasing/v1/index",
  "name": "v1/index",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1/index",
  "component": () => import('./index-1be57393.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1/",
      "url": "/example/aliasing/v1/",
      "filepath": "/example/aliasing/v1/_layout.svelte",
      "component": () => import('./_layout-07714bc7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/nesting/child/index",
  "regex": "^/example/nesting/child/index",
  "name": "child/index",
  "ranking": "ZZZZZ",
  "url": "/example/nesting/child/index",
  "component": () => import('./index-14e305e5.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/",
      "url": "/example/nesting/",
      "filepath": "/example/nesting/_layout.svelte",
      "component": () => import('./_layout-48613285.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/child/",
      "url": "/example/nesting/child/",
      "filepath": "/example/nesting/child/_layout.svelte",
      "component": () => import('./_layout-3c28743d.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1.1/index",
  "regex": "^/example/aliasing/v1.1/index",
  "name": "v11/index",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1.1/index",
  "component": () => import('./index-8fcf1045.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1.1/",
      "url": "/example/aliasing/v1.1/",
      "filepath": "/example/aliasing/v1.1/_layout.svelte",
      "component": () => import('./_layout-790c76e7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/modal/animated/index",
  "regex": "^/example/modal/animated/index",
  "name": "animated/index",
  "ranking": "ZZZZZ",
  "url": "/example/modal/animated/index",
  "component": () => import('./index-a290a0fa.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/modal/",
      "url": "/example/modal/",
      "filepath": "/example/modal/_layout.svelte",
      "component": () => import('./_layout-2b2905ea.js').then(m => m.default)
    },
    {
      "path": "/example/modal/animated/",
      "url": "/example/modal/animated/",
      "filepath": "/example/modal/animated/_layout.svelte",
      "component": () => import('./_layout-87b4dd0f.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1/feature3",
  "regex": "^/example/aliasing/v1/feature3",
  "name": "v1/feature3",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1/feature3",
  "component": () => import('./feature3-dadb625a.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1/",
      "url": "/example/aliasing/v1/",
      "filepath": "/example/aliasing/v1/_layout.svelte",
      "component": () => import('./_layout-07714bc7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1/feature2",
  "regex": "^/example/aliasing/v1/feature2",
  "name": "v1/feature2",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1/feature2",
  "component": () => import('./feature2-1573d8b9.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1/",
      "url": "/example/aliasing/v1/",
      "filepath": "/example/aliasing/v1/_layout.svelte",
      "component": () => import('./_layout-07714bc7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1/feature1",
  "regex": "^/example/aliasing/v1/feature1",
  "name": "v1/feature1",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1/feature1",
  "component": () => import('./feature1-be796fee.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1/",
      "url": "/example/aliasing/v1/",
      "filepath": "/example/aliasing/v1/_layout.svelte",
      "component": () => import('./_layout-07714bc7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/v1.1/feature2",
  "regex": "^/example/aliasing/v1.1/feature2",
  "name": "v11/feature2",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1.1/feature2",
  "component": () => import('./feature2-889d6f8f.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1.1/",
      "url": "/example/aliasing/v1.1/",
      "filepath": "/example/aliasing/v1.1/_layout.svelte",
      "component": () => import('./_layout-790c76e7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": true,
  "path": "/example/aliasing/v1.1/_fallback",
  "regex": "^/example/aliasing/v1.1/",
  "name": "v11/_fallback",
  "ranking": "ZZZZZ",
  "url": "/example/aliasing/v1.1/_fallback",
  "component": () => import('./_fallback-fc799d2f.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/v1.1/",
      "url": "/example/aliasing/v1.1/",
      "filepath": "/example/aliasing/v1.1/_layout.svelte",
      "component": () => import('./_layout-790c76e7.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/modal/animated/[key]",
  "paramKeys": [
    "key"
  ],
  "regex": "^/example/modal/animated/([^/]+)",
  "name": "animated/key",
  "ranking": "ZZZZA",
  "url": "/example/modal/animated/:key",
  "component": () => import('./[key]-eda30779.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/modal/",
      "url": "/example/modal/",
      "filepath": "/example/modal/_layout.svelte",
      "component": () => import('./_layout-2b2905ea.js').then(m => m.default)
    },
    {
      "path": "/example/modal/animated/",
      "url": "/example/modal/animated/",
      "filepath": "/example/modal/animated/_layout.svelte",
      "component": () => import('./_layout-87b4dd0f.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/modal/basic/[key]",
  "paramKeys": [
    "key"
  ],
  "regex": "^/example/modal/basic/([^/]+)",
  "name": "basic/key",
  "ranking": "ZZZZA",
  "url": "/example/modal/basic/:key",
  "component": () => import('./[key]-2e1bafa0.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/modal/",
      "url": "/example/modal/",
      "filepath": "/example/modal/_layout.svelte",
      "component": () => import('./_layout-2b2905ea.js').then(m => m.default)
    },
    {
      "path": "/example/modal/basic/",
      "url": "/example/modal/basic/",
      "filepath": "/example/modal/basic/_layout.svelte",
      "component": () => import('./_layout-0c625f07.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/api/index",
  "regex": "^/example/api/index",
  "name": "api/index",
  "ranking": "ZZZZ",
  "url": "/example/api/index",
  "component": () => import('./index-6e98a4f0.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/api/",
      "url": "/example/api/",
      "filepath": "/example/api/_layout.svelte",
      "component": () => import('./_layout-aa55bc0d.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/reset/index",
  "regex": "^/example/reset/index",
  "name": "reset/index",
  "ranking": "ZZZZ",
  "url": "/example/reset/index",
  "component": () => import('./index-84c63997.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/reset/",
      "url": "/example/reset/",
      "filepath": "/example/reset/_reset.svelte",
      "component": () => import('./_reset-f0a92f76.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/modal/index",
  "regex": "^/example/modal/index",
  "name": "modal/index",
  "ranking": "ZZZZ",
  "url": "/example/modal/index",
  "component": () => import('./index-4df4bd51.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/modal/",
      "url": "/example/modal/",
      "filepath": "/example/modal/_layout.svelte",
      "component": () => import('./_layout-2b2905ea.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/nesting/index",
  "regex": "^/example/nesting/index",
  "name": "nesting/index",
  "ranking": "ZZZZ",
  "url": "/example/nesting/index",
  "component": () => import('./index-1715a1ec.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/nesting/",
      "url": "/example/nesting/",
      "filepath": "/example/nesting/_layout.svelte",
      "component": () => import('./_layout-48613285.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/aliasing/index",
  "regex": "^/example/aliasing/index",
  "name": "aliasing/index",
  "ranking": "ZZZZ",
  "url": "/example/aliasing/index",
  "component": () => import('./index-c8c3d58d.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/aliasing/",
      "url": "/example/aliasing/",
      "filepath": "/example/aliasing/_layout.svelte",
      "component": () => import('./_layout-73089d71.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": true,
  "path": "/example/reset/_fallback",
  "regex": "^/example/reset/",
  "name": "reset/_fallback",
  "ranking": "ZZZZ",
  "url": "/example/reset/_fallback",
  "component": () => import('./_fallback-e85d8ef6.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/reset/",
      "url": "/example/reset/",
      "filepath": "/example/reset/_reset.svelte",
      "component": () => import('./_reset-f0a92f76.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": true,
  "path": "/example/widget/_fallback",
  "regex": "^/example/widget/",
  "name": "widget/_fallback",
  "ranking": "ZZZZ",
  "url": "/example/widget/_fallback",
  "component": () => import('./_fallback-859a796c.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/api/[slug]/index",
  "paramKeys": [
    "slug"
  ],
  "regex": "^/example/api/([^/]+)/index",
  "name": "slug/index",
  "ranking": "ZZZAZ",
  "url": "/example/api/:slug/index",
  "component": () => import('./index-50b2324e.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    },
    {
      "path": "/example/api/",
      "url": "/example/api/",
      "filepath": "/example/api/_layout.svelte",
      "component": () => import('./_layout-aa55bc0d.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/example/index",
  "regex": "^/example/index",
  "name": "example/index",
  "ranking": "ZZZ",
  "url": "/example/index",
  "component": () => import('./index-b75fa44d.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": true,
  "path": "/example/_fallback",
  "regex": "^/example/",
  "name": "example/_fallback",
  "ranking": "ZZZ",
  "url": "/example/_fallback",
  "component": () => import('./_fallback-9932f3da.js').then(m => m.default),
  "layouts": [
    {
      "path": "/example/",
      "url": "/example/",
      "filepath": "/example/_reset.svelte",
      "component": () => import('./_reset-2ca8edd9.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": false,
  "path": "/index",
  "regex": "^/index",
  "name": "/index",
  "ranking": "ZZ",
  "url": "/index",
  "component": () => import('./index-416913d2.js').then(m => m.default),
  "layouts": [
    {
      "path": "/",
      "url": "/",
      "filepath": "/_layout.svelte",
      "component": () => import('./_layout-ed74c390.js').then(m => m.default)
    }
  ]
},
{
  "isLayout": false,
  "isFallback": true,
  "path": "/_fallback",
  "regex": "^/",
  "name": "/_fallback",
  "ranking": "ZZ",
  "url": "/_fallback",
  "component": () => import('./_fallback-6afa0c62.js').then(m => m.default),
  "layouts": [
    {
      "path": "/",
      "url": "/",
      "filepath": "/_layout.svelte",
      "component": () => import('./_layout-ed74c390.js').then(m => m.default)
    }
  ]
}
];

/* src\App.svelte generated by Svelte v3.16.4 */

function create_fragment(ctx) {
	let current;
	const router = new Router({ props: { routes }, $$inline: true });

	const block = {
		c: function create() {
			create_component(router.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(router, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(router.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(router.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(router, detaching);
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

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment.name
		});
	}
}

const app = new App({
	target: document.body
});

export default app;
//# sourceMappingURL=main.js.map
