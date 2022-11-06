

const Schedule = () => {
    const data = [
        { time: "10AM", mon: "Anom", tue: 19, wed: "Male", thu: "Anom", fri: "Anom", sat: "Anom", },
        { time: "10AM", mon: "Anom", tue: 19, wed: "Male", thu: "Anom", fri: "Anom", sat: "Anom", },
        { time: "10AM", mon: "Anom", tue: 19, wed: "Male", thu: "Anom", fri: "Anom", sat: "Anom", },
    ]
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.time}</td>
                                <td>{val.mon}</td>
                                <td>{val.tue}</td>
                                <td>{val.wed}</td>
                                <td>{val.thu}</td>
                                <td>{val.fri}</td>
                                <td>{val.sat}</td>
                            </tr>
                        )
                    })}
                </table>
            </form>
        </div>
    )
}


export default Schedule;