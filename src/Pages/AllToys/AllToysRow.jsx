import React from 'react';

const AllToysRow = ({ allToy }) => {

    const { _id, toy_name, sub_category, price, available_quantity, detail_description } = allToy;

    return (
        <tr>

            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td><button className="btn btn-ghost btn-xs">View Details</button></td>
        </tr>
    );
};

export default AllToysRow;