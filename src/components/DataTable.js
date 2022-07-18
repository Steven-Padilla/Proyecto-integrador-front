export const DataTable = ({ id, hora, fecha, temp, humedad, agua, suelo }) => {
    return (
        <tr key={id} className='text-center'>
            <th>{id}</th>
            <td>{hora}</td>
            <td>{(fecha).slice(0, 10)}</td>
            <td>{temp}</td>
            <td>{humedad}</td>
            <td>{agua}</td>
            <td>{suelo}</td>
        </tr>
    )
}