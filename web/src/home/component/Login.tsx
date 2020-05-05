

import React, { useState } from "react"
import FacebookLogin from 'react-facebook-login';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export const Login: React.FunctionComponent = (props) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const responseFacebook = (response: any) => {
        console.log(response);
        alert("Facebook login not supported yet")
        handleClose()
    }

    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(response);
        handleClose()
    }

    return (
        <div className="login">

            <button onClick={handleOpen}> LOGIN </button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="login-dialog-title">LOGIN</DialogTitle>
                <DialogContent dividers={true} className="login-dialog-content">

                    <FacebookLogin
                        appId="547498469302524"
                        fields="name,email,picture"
                        callback={responseFacebook}
                        buttonStyle={{ margin: "0em", padding: "1em 1.2em", fontSize: "14px" }}
                    />

                    <GoogleLogin
                        clientId="142235214246-nkdqsmnk3o8pc0189g6je675d914du4j.apps.googleusercontent.com"
                        buttonText="LOGIN WITH GOOGLE"
                        className="login-google-button"
                        style={{ margin: "0em", width: "25em", padding: "1em" }}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </DialogContent>
            </Dialog>

        </div>
    )
}