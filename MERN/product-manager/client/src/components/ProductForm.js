import React, { useState } from "react";

export default function ProductForm(props) {
  const errors = props.err;
  const { initialTitle, initialPrice, initialDescription } = props;

  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitProp({ title, price, description });
    setTitle("");
    setPrice();
    setDescription("");
  };

  return (
    <>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="mr-2">Title</label>{" "}
          {errors.title ? (
            <span className="small text-danger">{errors.title.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Name"
          />
        </div>

        <div className="form-group">
          <label className="mr-2">Price</label>{" "}
          {errors.price ? (
            <span className="small text-danger">{errors.price.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            type="number"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            placeholder="Price"
          />
        </div>

        <div className="form-group">
          <label className="mr-2">Description</label>{" "}
          {errors.description ? (
            <span className="small text-danger">
              {errors.description.message}
            </span>
          ) : null}
          <input
            className="form-control form-control-sm"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <input className="btn btn-info btn-lg" type="submit" value="Create" />
      </form>
    </>
  );
}
