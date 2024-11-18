'use client'
import { apiLogin } from "@/utils/api";
import writerPro from "@/configs/writerpro";
import IconButton from "@mui/material/IconButton";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/dist/client/components/navigation";
import { useCallback } from "react";
import Alert from "./Alert";


const GoogleLoginButton = () => {
  // todo initialize app
  const firebaseConfig = writerPro.firebaseConfig;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  
  const login = useCallback(() => {
    signInWithPopup(auth, provider)
    .then((result) => {
      if (result == null){
        return
      }
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      const userInfo = user.providerData[0]
      
      localStorage.setItem('google_user_info', JSON.stringify(user))
      const loginData = {
        tenantCode: writerPro.tenantCode,
        loginType: 'google',
        identifyCode: userInfo.uid,
        email: userInfo.email,
        nickname: userInfo.displayName,
        avatar: userInfo.photoURL
      }
      
      apiLogin(loginData)
      .then((res) => {
        if (res.code !== 0) {
          Alert.error("Login failed, " + res.msg);
          return;
        }
        localStorage.setItem('writer_user', JSON.stringify(res.data));
        router.push(writerPro.loginSuccessPage);
      })
      .catch(error => {
        Alert.error("Login error: " + error);
      });
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        Alert.error("Login failed, " + errorMessage);
    });
  }, [app, auth, provider, router])
  
  return (
    <IconButton size='small' className='text-googlePlus' onClick={login}>
      <i className='ri-google-fill' />
      {Alert.renderAlert()}
    </IconButton>
    
  )
}

export default GoogleLoginButton
