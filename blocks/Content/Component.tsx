import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import { Block } from 'payload/types';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

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



export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};
