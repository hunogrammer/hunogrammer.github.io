import { c as create_ssr_component, t as subscribe, u as escape } from './exports-B9AHj57W.js';
import { p as page } from './stores-CC_WeL6c.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-C51WfBCj.js.map
