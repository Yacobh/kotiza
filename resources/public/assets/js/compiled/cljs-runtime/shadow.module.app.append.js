
shadow.cljs.devtools.client.env.module_loaded('app');

try { kotiza.core.init(); } catch (e) { console.error("An error occurred when calling (kotiza.core/init)"); throw(e); }