import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main> 
      <Layout>
        <div>
          <img 
          src="https://avatars.githubusercontent.com/u/46250325?v=4" 
          alt="Avatar of user"
          />
          <h1>mplbruno</h1>
          <h3>Username</h3>
          <span>mplbruno</span>
        </div>
        <div>
           <h4>Followers</h4>
           <span>5</span>
        </div> 
        <div>
           <h4>Starred</h4>
           <span>5</span>
        </div>
        <div>
           <h4>Followings</h4>
           <span>5</span>
        </div>

        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
