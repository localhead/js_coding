const obj = {
  result: {
    code: 6,
    items: [
      {
        id: 1,
        name: "lol",
      },
      {
        id: 2,
        name: "lel",
      },
    ],
  },
};

export const Component = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const response = await fetch("api").then((res) => res.json());

      setItems(response);
    };
    fn();
  }, []);

  return (
    <ui>
      {items.map((item) => {
        return <li key={item.id}>{items.name}</li>;
      })}
    </ui>
  );
};
