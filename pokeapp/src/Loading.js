import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
const Loading = () => {
    return (
        <div align='center'>
            <Loader
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={200}
            />
        </div>
    )
}

export default Loading
