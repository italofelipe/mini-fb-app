import * as Yup from "yup";

const CreateUserForm = Yup.object({
  user: Yup.string().required(),
  email: Yup.string().nullable().email().required(),
  password: Yup.string().min(8).required(),
  gender: Yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  age: Yup.number().max(110).required(),
});

const CreatePostCommentOrReply = Yup.object({
  content: Yup.string().required(),
});

export { CreateUserForm, CreatePostCommentOrReply };

