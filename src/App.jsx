import { Post } from "./Post";
import { Header } from "./components/Header";

import './styles.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Victor Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et officia voluptate sunt debitis quisquam? Cupiditate sapiente quos cum, laborum vel ex eaque soluta dolores provident non possimus, qui fugiat!"
      />

      <Post
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />
    </div>
  );
}
