import { Link, NavLink } from "react-router-dom";
import { getAll } from "../service/MusicAppService";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function DisplayList() {

    const [musicList,setMusicList] = useState([]);

    const getList = async () => {
        const result = await getAll();
        setMusicList(result);
        console.log(result);
    }

    useEffect(() => {
        getList();
    },[])

    return(
        <>
        <a href="/create">Create</a>

        <table className="table table-striped">
            <thead>
                <th>STT</th>
                <th>Name</th>
                <th>Type</th>
                <th>Singer</th>
            </thead>
            <tbody>
                {musicList.map((music,index) => (
                    <tr key={music.id}>
                        <td>{index +1}</td>
                        <td>{music.name}</td>
                        <td>{music.type}</td>
                        <td>{music.singer}</td>
                        <td>
                            <NavLink to={`/edit/${music.id}`} type="button" className="btn btn-primary" >Edit</NavLink>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
 export default DisplayList;