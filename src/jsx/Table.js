export function Table(props) {
  const rows = new Array(props.rows).fill(0);
  const columns = new Array(props.columns).fill(0);

  return <table>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {columns.map((column, index) => (
            <td key={index}>{props.children}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
}
