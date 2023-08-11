import Chance from "chance";

const chance = Chance();

export const UserData = () => {
  return chance.name({ middle: true });
};

UserData();
