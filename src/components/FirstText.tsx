export interface Stylish {
  title: string;
  color?: string;
}

const FirstText = (prop: Stylish) => {
  return (
    <div>
      <h1 style={{ color: prop.color ? prop.color : "pink" }}>
      {prop.title}</h1>
    </div>
  );
};

export default FirstText;
