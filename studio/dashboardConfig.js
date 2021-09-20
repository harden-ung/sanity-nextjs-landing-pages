export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6148cc2133f6f50090b3fb0e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2ofzquzd',
                  apiId: '9500dd13-df46-45ec-a2e0-a1e48a00cc64'
                },
                {
                  buildHookId: '6148cc21e0c6a400d3bfd339',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dg5fpdag',
                  apiId: '0acc0d19-f306-435a-ad82-37e751d00f30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harden-ung/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dg5fpdag.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
