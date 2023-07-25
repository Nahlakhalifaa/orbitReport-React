const Table = ({ sat }) => {
  const getStatus = (satellite) => {
    return satellite.operational ? 'Active' : 'Inactive';
  };
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>{sat.map((data) => (
        <tr key={data.id}>
          <td>data.name</td>
          <td>data.type</td>
          <td>data.launchDate</td>
          <td>data.Status</td>
        </tr>
        ))};
        </tbody>
      </table>
  );
};

export default Table;