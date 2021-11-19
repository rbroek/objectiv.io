/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

 module.exports = {
  homeSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'The Project',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'the-project', // Generate sidebar slice from docs/the-project
        },
      ]
    },
  ],
  taxonomySidebar: [{type: 'autogenerated', dirName: 'taxonomy'}],
  trackingSidebar: [{type: 'autogenerated', dirName: 'tracking'}],
     /*
modelingSidebar: [
    {
          type: 'category',
          label: 'Modeling',
          collapsed: false,
          items:  [  'modeling/intro', 'modeling/dataframe/bach.DataFrame',          {type: 'link', href: 'modeling/', label: 'Introduction1'},
              {type: 'link', href: '/modeling', label: 'Introduction2'},
              {type: 'link', href: '/modeling/dataframe/bach.DataFrame#bach.DataFrame', label: 'dataframe'},
          ]
        },
    ],*/

     modelingSidebar: require('./docs/modeling/sidebar.js')
};
