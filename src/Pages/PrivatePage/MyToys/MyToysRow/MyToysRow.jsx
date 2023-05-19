import React from 'react';


const MyToysRow = ({ myToy, handleDelete }) => {

    const { _id, toy_name, photo, sub_category, price, rating, available_quantity } = myToy;



    return (

        <tr>

            <td>
                <div className=" w-24 h-24">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>
                {toy_name}
            </td>
            <td>
                {sub_category}
            </td>
            <td>{price}$</td>
            <td>{rating}</td>

            <td>{available_quantity}</td>


            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>


    );
};

export default MyToysRow;