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

const resolvers = {
    Query: {
        hello: () => "world!",
        site: () => siteData
    }
}

module.exports = resolvers;