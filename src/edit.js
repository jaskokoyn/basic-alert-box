import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, RichText, InspectorControls, PanelColorSettings 
} from '@wordpress/block-editor';
import { Icon, PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { content, icon, backgroundColor, textColor } = attributes
	const blockProps = useBlockProps({
		style: {
			'border-color': backgroundColor,
			'background-color': backgroundColor,
			color: textColor
		}
	})

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'alert-box')}>
					<TextControl 
						label={__('Icon', 'alert-box')}
						value={icon}
						onChange={icon => setAttributes({icon})}
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={[
						{
							value: backgroundColor,
							onChange: backgroundColor => setAttributes({ backgroundColor }),
							label: __('Background Color', 'alert-box'),
						},
						{
							value: textColor,
							onChange: textColor => setAttributes({ textColor }),
							label: __('Text Color', 'alert-box'),
						},
					]}
				/>
			</InspectorControls>
			<div { ...blockProps }>
				<Icon 
					icon={icon}
				/>
				<div class="alert-box-content">
					<RichText
						tagName="div"
						value={ content } 
						onChange={ content => setAttributes({ content }) }
						placeholder={ __('Content Area', 'alert-box') }
					/>
				</div>
			</div>
		</>
	);
}
