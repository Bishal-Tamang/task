import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();

  const loginFunction = (token: any) => {
    const decoded = jwtDecode<JwtPayload>(token.credential);

    navigate("/dashboard", {
      state: {
        decoded,
      },
    });
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="border-white w-2/3 lg:w-1/3 h-1/3 bg-white rounded-lg px-4 py-2 text-center flex flex-col gap-4 items-center justify-center">
        <h1 className="font-medium font-[Inter] text-lg">Logging with Google</h1>
        <GoogleLogin
        shape="pill"
        text="continue_with"
          onSuccess={(credentialResponse) => loginFunction(credentialResponse)}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
