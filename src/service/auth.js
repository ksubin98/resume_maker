import  {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider, 
  FacebookAuthProvider
} from 'firebase/auth';

class Auth {

  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }
  
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout(){
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged(user => {
        onUserChanged(user)
    });
  }
  
  getProvider(providerName) {
    switch (providerName) {
        case 'Google':
            return this.googleProvider;
        case 'Facebook':
            return this.facebookProvider;
        default:
            throw new Error (`not supported provider: ${providerName}`);
    }
}

}

export default Auth;