import { useParams } from 'react-router';
import React, {useReducer} from "react";
import { useNavigate } from "react-router-dom";
import { useGetRentsQuery } from '../services/api-slice'


const reducer = (state, action) => {
  switch(action.type) {
    case 'selectImage': return {...state, selectImage: action.image};
    case 'rent': return {...state, rent: action.rent}
    default: return state;
  }
}

const initializer = {
  selectImage: '',
}

const RentDetail = () => {
  const { id } = useParams();
  const [currentState, dispatch] = useReducer(reducer, initializer )
  const { data: rentData, isError, isLoading } = useGetRentsQuery();
  const navigate = useNavigate();

  const onReturn = () => {
    navigate('/rent-list');
  } 

  if (isError) return (<div> Error ...</div>);
  if (isLoading) return (<div> loading ...</div>)
  return (
    <div>
      <div className="d-flex justify-content-start">
        <button className="btn btn-primary " onClick={onReturn}>back</button>
      </div>
      <div className="d-flex">
        <div className="col-6" style={{width: '500px'}}>
          <div className="flex-direction-column">
            <img src={currentState?.selectImage || rentData.entities[id].images[0]} style={{ width: '300px', height: '300px' }} className="my-3" alt="" />
            <div className="d-flex">
              {
                rentData.entities[id].images.map((image, index) => {
                  return (
                    <div className="" key={image + index} >
                      <img onClick={() => dispatch({ type: 'selectImage', image })} src={image} style={{ width: '100px', height: '100px' }} className="mx-2" alt="" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div>
          <h1>
            {rentData?.entities[id]?.title}
          </h1>
          <p>{rentData?.entities[id]?.description}</p>
          <p>Location: {rentData?.entities[id]?.location }</p>
          <h3>
            <p>price: {rentData?.entities[id]?.price}</p>
          </h3>
        </div>
      </div>
    </div>
  )
}


export default RentDetail;