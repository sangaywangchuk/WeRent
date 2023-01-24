import React from "react";
import { useGetRentsQuery } from '../services/api-slice'
import Rent from './Rent'
const RentList = () => {
  
  const { data: rentData, isError: isErrorRent, isLoading: isLoadingRent } = useGetRentsQuery();
 
  if (isErrorRent) return (<div> is error ...</div>);

  if (isLoadingRent) return (<div> is loading ...</div>);

  if (rentData) return (
		<div>
				<h3>Rent List</h3>
        {
        rentData?.ids?.length && rentData?.ids?.map((key) => {
            return (
              <Rent rent={rentData.entities[key]} key={key} />
            )
          })
        }
		</div>
	);
};

export default RentList;
