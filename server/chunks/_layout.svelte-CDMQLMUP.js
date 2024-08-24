import { c as create_ssr_component, k as compute_rest_props, l as spread, o as escape_object, p as escape_attribute_value, q as each, t as subscribe, v as validate_component, u as escape, w as add_attribute } from './exports-B9AHj57W.js';
import { p as page } from './stores-CC_WeL6c.js';

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});

const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const HOME = "Home";
const HOME_PATH = "/";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = [
    { name: HOME, path: HOME_PATH },
    {
      name: "복권 도구",
      path: "#",
      subPages: [{ name: "로또 번호 생성기", path: "/lotto" }]
    }
  ];
  let [activePage, previousPage, activeSubPage] = initPage();
  let expandedMenu = null;
  function initPage() {
    const path = $page.url.pathname;
    if (path === HOME_PATH) {
      return [HOME, HOME, ""];
    }
    for (const page2 of pages) {
      if (!page2.subPages) {
        continue;
      }
      for (const subPage of page2.subPages) {
        if (subPage.path === path) {
          return [page2.name, page2.name, subPage.name];
        }
      }
    }
    return [HOME, HOME, ""];
  }
  {
    {
      if (activePage !== previousPage) {
        activeSubPage = "";
      }
    }
  }
  $$unsubscribe_page();
  return `<header class="fixed top-0 z-50 w-full border-solid border-b-2 border-y-neutral-100 py-4 bg-gray-800 text-lg font-medium transition-all duration-300 ease-in-out opacity-100"><div class="container mx-auto px-4"><div class="flex items-center justify-between"><button class="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-transparent text-gray-700 hover:bg-gray-100 px-2 py-1 text-sm lg:hidden">${`${validate_component(Menu, "Menu").$$render($$result, { class: "h-6 w-6 text-white" }, {}, {})}`}</button> <nav class="${"" + escape("hidden", true) + " lg:flex flex-col lg:flex-row w-full lg:w-auto items-start lg:items-center justify-center gap-4 lg:gap-6 absolute lg:relative top-full left-0 bg-gray-800 lg:bg-transparent p-4 lg:p-0"}">${each(pages, (page2) => {
    return `<div class="w-full lg:w-auto relative group"><div class="flex items-center justify-between"><a${add_attribute("href", page2.path, 0)} class="${"transition-colors hover:text-[#433b3b] " + escape(
      activePage === page2.name ? "text-white" : "text-gray-400",
      true
    )}">${escape(page2.name)}</a> ${page2.subPages ? `<button class="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-transparent text-gray-700 hover:bg-gray-100 px-2 py-1 text-sm lg:hidden">${validate_component(Chevron_down, "ChevronDown").$$render(
      $$result,
      {
        class: "transition-transform duration-200 text-white " + (expandedMenu === page2.name ? "rotate-180" : "")
      },
      {},
      {}
    )} </button>` : ``}</div> ${page2.subPages ? `<div class="${"lg:absolute lg:top-full lg:left-0 lg:mt-2 bg-white shadow-md rounded-md sm:overflow-y-scroll transition-all duration-300 ease-in-out " + escape(
      expandedMenu === page2.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:opacity-100",
      true
    )}"><div class="py-2 flex flex-col lg:flex-row lg:max-w-screen-lg not-lg:max-h-1">${each(page2.subPages, (subPage) => {
      return `<a${add_attribute("href", subPage.path, 0)} class="${[
        "block px-4 py-2 tex text-gray-700 text-sm hover:bg-gray-100 hover:text-black whitespace-nowrap",
        activeSubPage === subPage.name ? "font-bold" : ""
      ].join(" ").trim()}">${activeSubPage === subPage.name ? `&gt;` : ``} ${escape(subPage.name)} </a>`;
    })}</div> </div>` : ``} </div>`;
  })}</nav></div></div></header>`;
});
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport Header from './Header.svelte';\\n\\timport { page } from '$app/stores'\\n\\timport '../app.css';\\n\\n\\texport const prerender = true;\\n\\n\\tlet showHeader = true;\\n\\n\\t$: {\\n\\t\\tshowHeader = $page.url.pathname !== '/'\\n\\t}\\n<\/script>\\n\\n<div class=\\"app\\">\\n\\t{#if showHeader}\\n\\t\\t<Header />\\n\\t{/if}\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<footer>\\n\\t\\t<p>visit <a href=\\"https://kit.svelte.dev\\">kit.svelte.dev</a> to learn SvelteKit</p>\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 64rem;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 12px;\\n\\t}\\n\\n\\tfooter a {\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 12px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,gCAAK,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACb,CAEA,gCAAK,CACJ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UACb,CAEA,kCAAO,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACV,CAEA,oBAAM,CAAC,eAAE,CACR,WAAW,CAAE,IACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,kCAAO,CACN,OAAO,CAAE,IAAI,CAAC,CACf,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const prerender = true;
  let showHeader = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  $$result.css.add(css);
  {
    {
      showHeader = $page.url.pathname !== "/";
    }
  }
  $$unsubscribe_page();
  return `<div class="app svelte-8o1gnw">${showHeader ? `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}` : ``} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-8o1gnw" data-svelte-h="svelte-1dlfr5"><p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p></footer> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CDMQLMUP.js.map
