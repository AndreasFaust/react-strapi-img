import Link from "next/link";

interface Props {
  route: string;
}

const Nav: React.FC<Props> = ({ route }) => {
  return (
    <nav className="nav">
      <h1>react-strapi-img</h1>
      <Link href="https://github.com/AndreasFaust/react-strapi-img">
        <a className="link" style={{ marginLeft: "auto" }}>
          GitHub
        </a>
      </Link>
      <Link href={route === "/" ? "/test" : "/"}>
        <a className="link">Link</a>
      </Link>
    </nav>
  );
};

export default Nav;
