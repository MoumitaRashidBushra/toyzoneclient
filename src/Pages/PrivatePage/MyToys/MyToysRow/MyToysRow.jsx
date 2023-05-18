import React from 'react';

const MyToysRow = ({ myToy }) => {

    const { toy_name, photo, sub_category, price, rating, available_quantity } = myToy;

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
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>


    );
};

export default MyToysRow;