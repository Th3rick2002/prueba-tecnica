"use client";
import React from 'react';
import useDataFetcher from '../hooks/useDataFetcher';

const DisplayData: React.FC = () => {
    const { data, loading, error } = useDataFetcher('http://localhost:5000/api/task');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {data?.map(task => (
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                        <td>
                            <button className="btn btn-success btn-sm m-2">Editar</button>
                            <button className="btn btn-error btn-sm">Borrar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayData;