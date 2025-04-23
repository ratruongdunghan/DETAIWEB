import { useState } from "react";

const DataTable = ({ columns, data, onEdit }) => {
    const [selectedRows, setSelectedRows] = useState([]);


    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(data.map((_, index) => index));
        } else {
            setSelectedRows([]);
        }
    };


    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    return (
        <table className="table-auto w-full mt-5 border border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border px-4 py-2">
                        <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectedRows.length === data.length && data.length > 0}
                        />
                    </th>
                    {columns.map((col, index) => (
                        <th key={index} className="border px-4 py-2 text-left">
                            {col.label}
                        </th>
                    ))}
                    <th className="border px-4 py-2 text-left"> &nbsp; &nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                        <td className="border px-4 py-2 text-center">
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(rowIndex)}
                                onChange={() => handleSelectRow(rowIndex)}
                            />
                        </td>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="border px-4 py-2">
                                {row[col.key]}
                            </td>
                        ))}
                        <td className="border text-center">
                            <button style={{cursor: "pointer"}} onClick={() => onEdit(row)}>
                                ✏️
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;