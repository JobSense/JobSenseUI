import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-component';

const removeButtons =
	'Source,Save,NewPage,Preview,Print,Templates,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Italic,Underline,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,JustifyLeft,JustifyRight,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Format,Font,FontSize,TextColor,BgColor,Maximize,ShowBlocks,About,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.updateContent = this.updateContent.bind(this);
		this.state = {
			content: 'content',
		};

		this.ckRef = React.createRef();
	}

	updateContent = newContent => {
		this.setState({
			content: newContent,
		});
	};

	onChange = evt => {
		this.props.onChange(evt);
		var newContent = evt.editor.getData();
		this.setState({
			content: newContent,
		});
	};

	onBlur = evt => {
		console.log('onBlur event called with event info: ', evt);
	};

	afterPaste = evt => {
		console.log('afterPaste event called with event info: ', evt);
	};

	render() {
		return (
			<CKEditor
				activeClass="p10"
				config={{
					removeButtons: removeButtons,
				}}
				content={this.state.content}
				events={{
					blur: this.onBlur,
					afterPaste: this.afterPaste,
					change: this.onChange,
				}}
				ref={this.ckRef}
			/>
		);
	}
}
