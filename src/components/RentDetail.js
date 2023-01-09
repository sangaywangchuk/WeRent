import { useParams } from 'react-router';
import React, {useReducer} from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import * as selectors from '../state/selector'

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
  
  const detail = useSelector(selectors.selectRentEntities)[id];
  debugger
  const navigate = useNavigate()
  const onReturn = () => {
    navigate('/rent-list');
  } 
  return (
    <div>
      <div className="d-flex justify-content-start">
        <button className="btn btn-primary " onClick={onReturn}>back</button>
      </div>
      <div className="d-flex">
        <div className="col-6" style={{width: '500px'}}>
          <div className="flex-direction-column">
            <img src={currentState?.selectImage || (detail?.images?.length && detail?.images[0])} style={{ width: '300px', height: '300px' }} className="my-3" alt="" />
            <div className="d-flex">
              {
                detail &&  detail.images.map((image, index) => {
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
          {detail && detail?.title}
          </h1>
          <p>{detail && detail?.description}</p>
          <p>Location: {detail && detail?.location }</p>
          <h3>
            <p>price: {detail && detail?.price}</p>
          </h3>
        </div>
      </div>
    </div>
  )
}


export default RentDetail;