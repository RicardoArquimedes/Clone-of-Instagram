import { USER_STATE_CHANGE } from'../constants/index'
import firebase from 'firebase'

//fetch and save the userState
export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
            .collection("user")
            .doc(firebase.auth().currentUser(User.uid)
            .get()
            .then((snaphsot) => {
                if(snapshot.exist){
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                }
                else{
                    console.log('does not exist')
                }
            }
            )
                     
            )
    })
}