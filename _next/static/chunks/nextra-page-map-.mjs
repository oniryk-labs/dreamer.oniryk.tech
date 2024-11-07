import meta from "../../../pages/_meta.js";
import code_generation_meta from "../../../pages/code-generation/_meta.js";
import extensions_meta from "../../../pages/extensions/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "code-generation",
  route: "/code-generation",
  children: [{
    data: code_generation_meta
  }, {
    name: "advanced-features",
    route: "/code-generation/advanced-features",
    frontMatter: {
      "sidebarTitle": "Advanced Features"
    }
  }, {
    name: "basic-usage",
    route: "/code-generation/basic-usage",
    frontMatter: {
      "sidebarTitle": "Basic Usage"
    }
  }, {
    name: "notes",
    route: "/code-generation/notes",
    frontMatter: {
      "sidebarTitle": "Notes"
    }
  }]
}, {
  name: "extensions",
  route: "/extensions",
  children: [{
    data: extensions_meta
  }, {
    name: "crud",
    route: "/extensions/crud",
    frontMatter: {
      "sidebarTitle": "Crud"
    }
  }, {
    name: "json-formatter",
    route: "/extensions/json-formatter",
    frontMatter: {
      "sidebarTitle": "Json Formatter"
    }
  }, {
    name: "lucid",
    route: "/extensions/lucid",
    frontMatter: {
      "sidebarTitle": "Lucid"
    }
  }, {
    name: "output-formatters",
    route: "/extensions/output-formatters",
    frontMatter: {
      "sidebarTitle": "Output Formatters"
    }
  }]
}, {
  name: "getting-started",
  route: "/getting-started",
  children: [{
    name: "installation",
    route: "/getting-started/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];