interface ICreateUserForm {
  user: string;
  email: string;
  password: string;
  gender: Gender;
  age: number;
}

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

interface Comment {
  owner_id: string;
  content: string;
  created_at: Date;
  replies: Replies[];
}

interface IReplies {
  owner_id: string; // Aponta para o userId da pessoa que comentou
  content: string; // É o conteúdo do reply
  created_at: Date;
}
interface IPost {
  content: string;
  owner_id: string;
  created_at: Date;
  likes: number;
  comments: Comment[] | [];
}

interface IUser {
  userId: string; // id unico
  name: string;
  password: string;
  email: string;
  photo_url: string; // url da imagem, pode até apontar pra foto do google
  bio: string; // uma bio qualquer, até sla, 200 palavras
  age: number;
  posts: Post[] | []; // a definição está logo abaixo
  interests: string[];
  friends: User["userId"][]; // amigos nada mais são que outros perfis, logo, um array
}

interface EnvMapper {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}