import React from 'react';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.upload = this.upload.bind(this);
    }

    handleChange(selectorFiles) {
        console.log(selectorFiles);
        this.setState({
            file: selectorFiles[0],
        })
    }
    upload() {
        var formData = new FormData();
        formData.append("upfile", this.state.file);
        return fetch('http://qltt.vn/api/upload/?accessToken=' + localStorage.getItem("token"), {
            method: 'POST',
            headers: {
            },
            body: formData,
        }).then((response) => response.json())
        .then((responseJson) => {
            alert(responseJson.success ? "success" : responseJson.err)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
            <div>
                <input type="file" onChange={(e) => this.handleChange(e.target.files)} />
                <button onClick={this.upload} children="Tải lên" />
            </div>
        )
    }

}

export default FileUpload;