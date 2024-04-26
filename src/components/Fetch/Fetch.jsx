import './Fetch.scss'
import useFetchReducer from './useFetchReducer';


const Fetch = () => {

    const [info] = useFetchReducer('https://jsonplaceholder.typicode.com/users')



    return (
        <div className='Fetch'>
            <div className="container">
                <div className="Fetch-block">

                    <div className="Fetch-block-list">
                        <ul>
                            {
                                info?.map((user) => (
                                    <li key={user.name}>
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Fetch;