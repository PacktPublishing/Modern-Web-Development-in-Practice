const fs = require("fs");
const fm = require("front-matter");
const path = require("path");
const remark = require("remark");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const menuLinks = [
    { url: '/', name: 'Home' },
    { url: '/contact/', name: 'Contact' },
    { url: '/about/', name: 'About' }
  ]

const siteData = {
    siteMetadata: {
        title: 'Gatsby Starter Blog',
        author: 'Kyle Mathews',
        description: 'A starter blog demonstrating what Gatsby can do.',
        siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
        social: {
          twitter: 'kylemathews',
        },
        menuLinks: () => menuLinks
    }
}

function getPosts(parent, args, context, info) {
    var directories = fs.readdirSync(path.resolve(__dirname, "../content/blog"));
    var posts = directories.map(slug => {
        var fileContent = fs.readFileSync(path.resolve(__dirname, `../content/blog/${slug}/index.md`));
        var fmData = fm(fileContent.toString("utf-8"));
        return {
            node: {
                excerpt: "",
                fields: {
                    slug: `/${slug}`
                },
                frontmatter: fmData.attributes
            }
        }
    });

    return {
        edges: posts
    };
}

const resolvers = {
    DateTime: new GraphQLScalarType({
        name: "DateTime",
        description: "DateTime custom scalar type",
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            value = this.parseValue(value);
            return value;
        },
        parseLiteral(ast) {
            if (ast.kind == Kind.INT) {
                return (parseInt(ast.value, 10));
            }
            return null;
        }
    }),
    Query: {
        hello: () => "world!",
        site: () => siteData,
        allMarkdownRemark: (parent, args, context, info) => {
            return getPosts(parent, args, context, info);
        }
    }
}

module.exports = resolvers;