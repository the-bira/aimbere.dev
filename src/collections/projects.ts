import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      required: false
    },
    {
      name: 'github',
      type: 'text',
      label: 'Github',
      required: false
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'full_description',
      type: 'richText',
      required: true
    },
  ],
  timestamps: true,
}

export { Projects }