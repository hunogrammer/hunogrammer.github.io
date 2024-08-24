const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BPKDfB6c.js","app":"_app/immutable/entry/app.BQrEiHTB.js","imports":["_app/immutable/entry/start.BPKDfB6c.js","_app/immutable/chunks/entry.CggNksC3.js","_app/immutable/chunks/scheduler.D-sW4xTf.js","_app/immutable/entry/app.BQrEiHTB.js","_app/immutable/chunks/scheduler.D-sW4xTf.js","_app/immutable/chunks/index.CQ8xkoUY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Co7ImEui.js')),
			__memo(() => import('./chunks/1-trled99K.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/lotto"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
