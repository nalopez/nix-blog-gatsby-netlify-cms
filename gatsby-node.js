const path = require('path');


// exports.createPages = ({ graphql, actions}) => {
//     const { createPage } = actions;
//     return new Promise((resolve, reject) => {
//         graphql(`
//         {
//             allMarkdownRemark {
//               edges {
//                 node {
//                   frontmatter {
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `).then(results => {
//             results.data.allMarkdownRemark.edges.forEach(({node}) => {
//                 createPage({
//                     path: `blogs${node.frontmatter.slug}`,
//                     component: path.resolve('./src/components/postLayout.js'),
//                     context: {
//                         slug: node.frontmatter.slug,
//                     }
//                 });
//             })

//             // finalize Promise()
//             resolve();
//         })
//     })
// }

// exports.createPages = ({ graphql, actions}) => {
//     const { createPage } = actions;
//     return new Promise((resolve, reject) => {
//         graphql(`
//         {
//             allMarkdownRemark {
//               edges {
//                 node {
//                   frontmatter {
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `).then(results => {
//             results.data.allMarkdownRemark.edges.forEach(({node}) => {
//                 createPage({
//                     path: `${node.frontmatter.slug}`,
//                     component: path.resolve('./src/components/mainpageLayout.js'),
//                     context: {
//                         slug: node.frontmatter.slug,
//                     }
//                 });
//             })

//             // finalize Promise()
//             resolve();
//         })
//     })
// }
