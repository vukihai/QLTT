import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';

class MyEditor extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value });
  }
  render() {
    return (
      <div>
      <ReactQuill 
        theme="snow"
        modules={{
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
                ],
              }}
        formats={[
                'header',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image'
              ]
            }
            value={this.state.text}
            onChange={this.handleChange} />
        <div dangerouslySetInnerHTML={{__html: this.state.text}} />
        </div>
        )
  }
}
export default MyEditor;