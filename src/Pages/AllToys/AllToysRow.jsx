import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ allToy }) => {

    const { _id, toy_name, sub_category, price, available_quantity, detail_description } = allToy;

    return (
        <tr>

            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <th>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;