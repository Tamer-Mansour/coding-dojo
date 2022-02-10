import { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = {
    file: null,
  };

  handleFile(e) {
    var file = e.target.files[0];
    this.setState({ file: file });
  }
  handleUpload(e) {
    var file = this.state.file;
    var formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", "tamer mansour");

    axios({
      url: `/upload/some/api`,
      method: "POST",
      headers: {
        authorization: `you token`,
      },
      data: formdata,
    }).then(
      (res) => {},
      (err) => {}
    );
  }

  render() {
    return (
      <>
        <h1>You can upload your file</h1>
        <form>
          <div>
            <label>Select your File to upload</label>
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <button type="button" onClick={(e) => this.handleUpload(e)}>
            Upload
          </button>
        </form>
      </>
    );
  }
}

export default Upload;
