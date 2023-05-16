type TCard = {
  background: string;
  border: string;
  label: string;
};

type TButton = {
  border: string;
  borderDisabled: string;
  text: string;
};

type TColor = {
  text: string;
  background: string;
  card: TCard;
  button: TButton;
};

export type Theme = {
  color: TColor;
};
