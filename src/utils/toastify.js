import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default class Toaster extends Component {
    notify = () => {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    render() {
        return (
            <ToastContainer />
        )
    }
}