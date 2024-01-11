export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'LastName',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
    },

    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'image',
      type: 'image',
    },
  ],
}
