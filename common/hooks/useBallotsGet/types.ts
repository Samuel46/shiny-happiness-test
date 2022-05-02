export type NomineeType = {
  title: string;
  photoUrL: string;
  id: string;
};

export type BallotsItemType = {
  id: string;
  items?: NomineeType[];
  title: string;
};

export type BallotsType = {
  items?: BallotsItemType[];
};
