import { Form, Field } from "react-final-form";
import { images } from "../mock/rentList"
import * as actions from '../state/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validate = (value) => {
  if (value?.length < 6) {
    return "To small!";
  }
  return value ? undefined : "Required";
};

const CreateRent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    await sleep();
    const payload = { ...values, id: Math.random().toString(), images };
    dispatch(actions.onCreateRent(payload));
    navigate('/rent-list');
  };

	return (
    <div className="d-flex justify-content-center">
      <div className="flex-direction-column justify-content-center col-6">
        <h1>create rent</h1>
				<Form onSubmit={onSubmit}>
					{({ handleSubmit, submitting }) => (
						<form onSubmit={handleSubmit}>
							<Field
								name="title"
								validate={validate}
								render={({ input, meta }) => (
                  <div>
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        {...input}
                        placeholder="Title"
                      />
                      <label className="input-group-text" id="basic-addon2">
                        Title
                      </label>
                    </div>
                    {meta.touched && meta.error && <div className="mb-2">{meta.error}</div>}
                  </div>
								)}
							/>
							<Field
								name="location"
								validate={validate}
								render={({ input, meta }) => (
                  <div>
                    <div className="input-group mb-3">
                      <input className="form-control" placeholder="Location" type="text" {...input} />
                      <label className="input-group-text">location</label>
                    </div>
                      {meta.touched && meta.error && <div className="mb-2">{meta.error}</div>}
                  </div>
								)}
							/>
							<Field
								name="price"
								render={({ input, meta }) => (
                  <div>
                    <div className="input-group mb-3">
                      <textarea className="form-control" placeholder="Price" {...input} />
                      <label className="input-group-text">Price</label>
                    </div>
                      {meta.touched && meta.error && <div className="mb-2">{meta.error}</div>}
                  </div>
								)}
							/>
							<Field
								name="description"
								validate={validate}
								render={({ input, meta }) => (
                  <div>
                    <div className="input-group mb-3">
                      <textarea className="form-control" placeholder="Description" {...input} />
                      <label className="input-group-text">Description</label>
                    </div>
                      {meta.touched && meta.error && <div className="mb-2">{meta.error}</div>}
                  </div>
								)}
							/>
							<button type="submit" className="btn btn-primary" disabled={submitting}>
								Submit
							</button>
						</form>
					)}
				</Form>
			</div>
		</div>
	);
};

export default CreateRent;
