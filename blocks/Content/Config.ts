import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              options: [
                {
                  label: 'One Third',
                  value: 'Third',
                },
                {
                  label: 'One Half',
                  value: 'Half',
                },
                {
                  label: 'Two Thirds',
                  value: 'TwoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'Full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Column Alignment',
              type: 'select',
              defaultValue: 'Left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'Left',
                },
                {
                  label: 'Center',
                  value: 'Center',
                },
                {
                  label: 'Right',
                  value: 'Right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    }
  ],
};

export default Content;
