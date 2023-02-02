interface ICar {
  name: string;
  number: number;
}

interface IBmw extends ICar {
  color: string;
  extraBallon: boolean;
  value: "Salom hammaga";
}
