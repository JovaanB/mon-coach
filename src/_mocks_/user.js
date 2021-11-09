import faker from "faker";
import { sample } from "lodash";
import { mockImgAvatar } from "../utils/mockImages";

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  age: faker.datatype.number({ min: 18, max: 60 }),
  activityId: faker.datatype.number({ min: 1, max: 5 }),
  gender: sample(["male", "female"]),
  weight: faker.datatype.number({ min: 50, max: 150 }),
  height: faker.datatype.number({ min: 130, max: 210 }),
  email: faker.internet.email(),
  isVerified: faker.datatype.boolean(),
  status: sample(["Seche", "PDM", "Perf", "Aucun"]),
  role: sample(["Coach", "Distanciel", "Présentiel"]),
}));

export default users;
