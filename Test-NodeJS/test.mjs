const five = 5;
import { name } from './second.mjs';

// const newname = require("./second");
// console.log(newname);
// console.log(newname.name);
console.log(name);

//JS modules-self contained js files
//Native import export system in Node js is called "CommonJS module"
//NodeJs works on EcmaScript modules. To use it, add extension .mjs

//packaḍge.json-contains package info
//package-lock.json-contains package and dependency versions
//node-modules-the packages that were installed
//npm install-installs required packages when it is required to execute a particular file
//npm run script_name

//graphql api, rest api-server architecture implementations

//REST-server exposes multiple endpoints
//     - server dictates what data will be sent and in what format
//GraphQL-server exposes only one endpoint accessed with Graphql language
//      - only sends data thats asked for
//      - client specifies what data will be retrieved from schema which is defined on the server

// Static pages   -  Markup is already created for all pages before it is placed on the server.
//               - not dynamically assembled on every request
//               - server sends same html markup all the time

// Server side rendering - Markup is dynamically generated on every request.
//                       - server takes data from DB, injects data into html template and sends back final markup

//Types:
// 1-Server side rendering
// 2- Client side rendering -single page apps(SPA)- assembled in broswer by JS. Bad for SEO(meta tags).
// 3- hybrid-(documentations)In app like feeling due to csr and good seo due to ssr

//client side routing- without additional request browser renders the page
//server side routing- a request leads to refreshing of the page to be rendered by the server

//                 SSR      CSR
// SEo             +        +-
// In app feel     -        +
// requires js     -        +

// for seo drawback- another solution in csr: Prerendering to html format