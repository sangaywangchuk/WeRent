import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../state/action";
import { rentList } from "../mock/rentList";
import ImageSwiper  from "./Swipper";
import { useNavigate } from "react-router-dom";
import * as selectors from '../state/selector'
const RentList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector(selectors.selectRentList);
  

  const onViewDetail = (id) => {
    navigate('/rent-detail/'+ id);
  }

	return (
		<div>
				<h3>Rent List</h3>
        {
          list.length && list.map((rent, index) => {
            return (
              <div className="d-flex d-flex-wrap" key={rent.id}>
                <div className="card col-8 mx-auto mb-4">
                  <div className="d-flex card-container">
                    <ImageSwiper sliderImages={rent.images} className="card-img-top"></ImageSwiper>
                    <div className="col-12 card-body">
                      <h3>{rent?.title}</h3>
                      <p>Location: {rent?.location}</p>
                      <h3>Price: {rent?.price}</h3>
                      <p className="card-text">{rent?.description}</p>
                      <div className="d-flex col-12 justify-content-around">
                        <button onClick={() => dispatch(actions.onDeleteRent(rent && rent?.id))} className="btn btn-danger me-3">Delete</button>
                        <button className="btn btn-primary" onClick={() => {
                              onViewDetail(rent?.id)
                            }}>View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
		</div>
	);
};

export default RentList;
