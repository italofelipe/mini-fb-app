import { initializeApp } from "firebase/app";
import {
  Auth,
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
  private authData!: Auth;

  constructor(envMapper: EnvMapper) {
    this.apiKey = envMapper.apiKey;
    this.authDomain = envMapper.authDomain;
    this.databaseURL = envMapper.databaseURL;
    this.projectId = envMapper.projectId;
    this.storageBucket = envMapper.storageBucket;
    this.messagingSenderId = envMapper.messagingSenderId;
    this.appId = envMapper.appId;

    this.init();
  }

  /**
   *
   * @returns An object in which you can retrive your auth data or createUser method
   */
  private init(): Auth {
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
    this.authData = getAuth(app);
    return this.authData;
  }

  createUser(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.authData, email, password);
  }

  private getData() {
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
