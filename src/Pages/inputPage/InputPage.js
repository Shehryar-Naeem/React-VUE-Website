import React, { useState } from "react";
import image from "../../Images/upload.jpeg";
const Inputpage = () => {
  const [discription, setDiscription] = useState("");
  const [pic, setPic] = useState(image);
  const uploadImage = (e) => {
    if (e.target.files.length !== 0) {
      setPic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDiscription("")
    setPic(image)
  };
  return (
    <>
      <section className="input_page_container">
        <form className="form_container" onSubmit={submitHandler}>
          <fieldset>
            <legend className="fieldset_holder">Add Card</legend>
            <div className="input_container">
              <label>Discription</label>
              <div className="input_portion">
                <textarea
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  className="input_tag"
                ></textarea>
              </div>
            </div>
            <div className="input_container">
              <label>Upload Photo</label>
              <div className="input_portion">
                <input type="file" onChange={uploadImage} />
              </div>
            </div>
            <button>Submit</button>
          </fieldset>
        </form>
        <div className="img_sec">
          <p>{discription}</p>
          <div className="img_section">
            <img src={pic} alt="assignmentpic" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Inputpage;
