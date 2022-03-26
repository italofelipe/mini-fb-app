import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential
} from "firebase/auth";

export class Firebase {
  private apiKey: string;
  private authDomain: string;
  private databaseURL: string;
  private projectId: string;
  private storageBucket: string;
  private messagingSenderId: string;
  private appId: string;

  constructor(envMapper: EnvMapper) {
    this.apiKey = envMapper.apiKey;
    this.authDomain = envMapper.authDomain;
    this.databaseURL = envMapper.databaseURL;
    this.projectId = envMapper.projectId;
    this.storageBucket = envMapper.storageBucket;
    this.messagingSenderId = envMapper.messagingSenderId;
    this.appId = envMapper.appId;
  }

  /**
   *
   * @returns An object in which you can retrive your auth data or createUser method
   */
  init() {
    const firebaseEnvConfig = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId,
    };

    const app = initializeApp(firebaseEnvConfig);
    const auth = getAuth(app);
    return { auth, createUser: this.createUser };
  }

  createUser(email: string, password: string): Promise<UserCredential> {
    const initialize = this.init().auth;

    console.log(
      "Logger",
      Promise.resolve(
        createUserWithEmailAndPassword(initialize, email, password)
      )
    );
    return createUserWithEmailAndPassword(initialize, email, password);
  }

  getData() {
    const firebaseEnvConfig = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId,
    };
    return firebaseEnvConfig;
  }
}
