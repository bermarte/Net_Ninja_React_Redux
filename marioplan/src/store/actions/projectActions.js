import { firestoreConnect } from "react-redux-firebase";

export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call
        const firestore = getFirestore();
        // adding a document to firestore
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        });
    }
}