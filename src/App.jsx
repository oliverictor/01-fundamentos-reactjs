import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Victor Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et officia voluptate sunt debitis quisquam? Cupiditate sapiente quos cum, laborum vel ex eaque soluta dolores provident non possimus, qui fugiat!"
          />

          <Post author="Diego Fernandes" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
