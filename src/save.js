import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function save({ attributes }) {
	const { content, icon, backgroundColor, textColor } = attributes
	const blockProps = useBlockProps.save({
		style: {
			'border-color': backgroundColor,
			'background-color': backgroundColor,
			color: textColor
		}
	})

	return (
		<div { ...blockProps }>
			<Icon 
				icon={icon}
			/>
			<div class="alert-box-content">
				<RichText.Content tagName="div" value={content} />
			</div>
		</div>
	)
}
