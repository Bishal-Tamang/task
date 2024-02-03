import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.tsx";
// import 'dotenv/config'
import "./index.css";

import { AuthProvider } from "react-auth-kit";

// const REACT_APP_GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// const googleID = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? "";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
    >
      <BrowserRouter>
       {/* <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}> */}
        <GoogleOAuthProvider clientId="545125055390-erm6uveovlttbjqemjvki5p8shmuk73e.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
