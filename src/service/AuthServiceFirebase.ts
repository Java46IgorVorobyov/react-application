import AuthService from "./AuthService";
import {collection, getFirestore, doc, getDoc} from "firebase/firestore";
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    UserCredential,
    AuthProvider,
    GithubAuthProvider
} from "firebase/auth";
import {ClientData} from "../models/ClientData";
import LoginData from "../models/LoginData";
import firebaseApp from "../config/firebase-config";
import google from "../icons/google.svg";
import github from "../icons/github.svg";
import {authService} from "../config/service-config";
import firebase from "firebase/compat";
// import AuthProvider = firebase.auth.AuthProvider;
// import GithubAuthProvider = firebase.auth.GithubAuthProvider;

const ADMINISTRATORS_COLLECTION_NAME = 'administrators';

export default class AuthServiceFirebase implements AuthService {
    authFirebase = getAuth(firebaseApp);
    administratorsCollection = collection(getFirestore(firebaseApp), ADMINISTRATORS_COLLECTION_NAME);

    login(loginData: LoginData): Promise<ClientData | boolean> {
        //FixMe HW#50
        return !loginData.email ? this.authPopupProvider(loginData.password) : this.authPassword(loginData);
    }

    async logout(): Promise<boolean> {
        try {
            await signOut(this.authFirebase);
            return true;
        } catch (err) {
            return false;
        }
    }

    providers(): { name: string; icon: string; }[] {
        return [
            {name: "Google", icon: google},
            {name: "GitHub", icon: github}
        ];
    }

    async authPassword(loginData: LoginData): Promise<boolean | ClientData> {
        try {
            const userDetails = await signInWithEmailAndPassword(this.authFirebase, loginData.email, loginData.password);
            return await this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }

    async authPopupProvider(providerName: string): Promise<boolean | ClientData> {
        try {
            const userDetails = await signInWithPopup(this.authFirebase, this.getProvider(providerName));
            return this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }


    private async getClientData(userDetails: UserCredential) {
        try {
            const {uid, email, displayName} = userDetails.user;
            return {displayName: displayName || email, email, isAdmin: await this.isAdmin(uid)} as ClientData;
        } catch (err) {
            return false;
        }
    }

    private async isAdmin(uid: string): Promise<boolean> {
        return (await getDoc(doc(this.administratorsCollection, uid))).exists();
    }

    private getProvider(providerName: string): AuthProvider {
        let provider: AuthProvider;
        switch (providerName) {
            case 'GitHub':
                provider = new GithubAuthProvider();
                break;
            default:
                provider = new GoogleAuthProvider();
        }
        return provider;
    }

}