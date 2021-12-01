/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const projects = require('./projects');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;




  projects.forEach((node, index) => {
    let next =
      index === projects.length - 1 ? projects[0] : projects[index + 1];

    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve(`./src/templates/Project`),
      context: { data: node, next },
    });
  });

 
};
