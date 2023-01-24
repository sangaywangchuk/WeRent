import ImageSwiper from "./Swipper";
import { useDeleteRentMutation } from '../services/api-slice'
import { useNavigate } from "react-router-dom";

const Rent = (props) => {
  const navigate = useNavigate()
  const [ deleteRent, { isLoading , isError }] = useDeleteRentMutation()


  const onDeleteRent = async (id) => {
    await deleteRent(id).unwrap();
  }

  const onViewRentDetail = (id) => {
    navigate('/rent-detail/'+ id)
  }

  if (isLoading) return (<div> loading... </div>);

  if (isError) return ( <div> error ...</div> );

  if (props?.rent) return (
    <div className="d-flex d-flex-wrap">
      <div className="card col-8 mx-auto mb-4">
        <div className="d-flex card-container">
          <ImageSwiper sliderImages={props?.rent?.images} className="card-img-top"></ImageSwiper>
          <div className="col-12 card-body">
            <h3>{props?.rent?.title}</h3>
            <p>Location: {props?.rent?.location}</p>
            <h3>Price: {props?.rent?.price}</h3>
            <p className="card-text">{props?.rent?.description}</p>
            <div className="d-flex col-12 justify-content-around">
              <button className="btn btn-danger me-3" onClick={() => onDeleteRent(props?.rent?.id)}>Delete</button>
              <button className="btn btn-primary" onClick={() => onViewRentDetail(props?.rent?.id)} >View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rent;