import { ctgry, prodImgUrl } from "../../reducers/ApiUrl";

export default function Categories() {
    return <div style={{ width: '100vw' }}>
        <h1>Categories</h1>
        <br />

        <div className="container d-flex" style={{ width: '100vw' }}>
            <div className="">
                <div className=" ">
                    {
                        ctgry.map((ctgry) => (
                            <div className="card mb-3" key={ctgry.id}>
                                <div className="card-body">
                                    <table>
                                        <tbody><tr>
                                            <td><img src={prodImgUrl()} alt={ctgry.name} style={{ width: '150px' }} />
                                            </td><td className='mx-2 px-2'></td><td><h5 className="card-title">{ctgry.name}</h5>
                                                <p className="card-text">{ctgry.description}</p>
                                            </td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    </div >
}