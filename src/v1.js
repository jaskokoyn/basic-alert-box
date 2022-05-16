import blockData from './block.json';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { omit } from 'lodash';

export default {
  supports: {
    ...blockData.supports
  },
  attributes: {
    ...blockData.attributes,
    ...omit(blockData.attributes, ['backgroundColor']),
    bgColor: {
      type: "string",
      default: "#4F46E5"
    },
    content: {
			type: "string",
			source: "html",
      selector: ".alert-box-content p"
		}
  },
  migrate(attributes) {
    return {
      ...omit(attributes, ['bgColor']),
      backgroundColor: attributes.bgColor
    }
  },
  save({ attributes }) {
    const { content, icon, bgColor, textColor } = attributes
    const blockProps = useBlockProps.save({
      style: {
        'border-color': bgColor,
        'background-color': bgColor,
        color: textColor
      }
    })

    return (
      <div { ...blockProps }>
        <Icon 
          icon={icon}
        />
        <div class="alert-box-content">
          <RichText.Content tagName="p" value={content} />
        </div>
      </div>
    )
  }
}