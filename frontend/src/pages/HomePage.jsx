import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section>
    <header>
      <h1>React Tasks</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        fugit doloremque molestias recusandae labore repellat amet dicta tempore
        necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
        quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
        ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
        officia accusantium vitae doloremque, molestias modi.
      </p>
      <Link to="/register">Get Started</Link>
    </header>
  </section>
  );
}

export default HomePage;
