export default {
  widgets: [
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
                  buildHookId: '5f33f21135aa19a6d68c2afa',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5oy5vs3k',
                  apiId: '8ee09368-043e-4d36-964f-06bacea94a7a'
                },
                {
                  buildHookId: '5f33f2119ee8bb9ea82bc5a6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bzpvpvg6',
                  apiId: '090831ed-d71e-471e-a33d-77ede24f818a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olegkrav/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bzpvpvg6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
