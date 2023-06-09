import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			options: { icon: 'src/images/icon.png' },
			resolve: 'gatsby-plugin-manifest'
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			__key: 'images',
			options: {
				name: 'images',
				path: './src/images/'
			},
			resolve: 'gatsby-source-filesystem'
		},
		{
			__key: 'pages',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			resolve: 'gatsby-source-filesystem'
		},
		{
			options: { trackingIds: [ 'G-1YPNLPR0CQ' ] },
			resolve: 'gatsby-plugin-google-gtag'
		}
	],
	siteMetadata: { siteUrl: 'https://www.yourdomain.tld' }
};

export default config;