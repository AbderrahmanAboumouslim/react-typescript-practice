export interface Stylish {
  title: string;
  color?: string;
}

const ExampleTs = (prop: Stylish) => {
  return (
    <div>
      <h1 style={{ color: prop.color ? prop.color : "pink" }}></h1>
    </div>
  );
};

export default ExampleTs;
