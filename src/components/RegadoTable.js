export const RegadoTable = ({ id='-', hora='-', fecha='-' }) => {
    return (
        <tr key={id} className='text-center'>
            <th>{id}</th>
            <td>{hora}</td>
            <td>{(fecha).slice(0, 10)}</td>
        </tr>
    )
}