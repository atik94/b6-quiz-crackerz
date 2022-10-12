import React from "react";

const Blog = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">What is the purpose of react router ?</h5>
              <p class="card-text">
                ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to
                define multiple routes in the application. When a user types a specific URL into the browser, and if
                this URL path matches any 'route' inside the router file, the user will be redirected to that particular
                route.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">How does context api work ?</h5>
              <p class="card-text">
                The React Context API is a way for a React app to effectively produce global variables that can be
                passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to
                parent, and so on. Context is also touted as an easier, lighter approach to state management using
                Redux.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">What is useref ?</h5>
              <p class="card-text">
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value
                that does not cause a re-render when updated. It can be used to access a DOM element directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
