import { useContext } from "react"
import { UserContext } from "./App"
import { firebase } from "./utils/firebase-config"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



export default function Login() {

    let { user, setUser } = useContext(UserContext)

    // Configure FirebaseUI.
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/tictactoe',   // path to go if log in is successful
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,  // google authentication
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,  // for phone authentication
            firebase.auth.EmailAuthProvider.PROVIDER_ID   // for email authentication
        ],
    };


    return (
        // we used a ternary operator Here ...agr user hai toh log button dikhao with onclick func to log out ...and agr user nhi hai(undefined) hai toh google log in ka config component pe aa jao
        <div>
            {
                user ? (undefined)
                    : (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />)
            }
        </div>
    )
}