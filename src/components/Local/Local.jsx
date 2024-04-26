import { Button, TextField } from '@mui/material';
import './Local.scss'
import useLocalStorage from './useLocalStorage';
import { useState } from 'react';


const Local = () => {
    const [value, setValue] = useState('')
    const [text, setText] = useLocalStorage('local')

    const SaveValue = () => {
        setText(value)
    }

    return (
        <div className='Local'>
            <div className="container">
                <div className="Local-block">
                    <div className="Local-block-navi">
                        <TextField
                            id="filled-search"
                            label="Add Text"
                            type="search"
                            variant="filled"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Button variant="contained" onClick={() => SaveValue()}>Save</Button>
                    </div>
                    <div className="Local-block-show">
                        <p>LocalStorage</p>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Local;