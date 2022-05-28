import React from "react";

const Blog = () => {
  return (
    <div className="w-8/12 mx-auto">
      {/* <!-- row 1 --> */}

      <p>How will you improve the performance of react application? </p>

      <p>
        There are some method that help us to improve react application
        performance
        <li>
          Using React.memo,can fast the react performance. It is a high ordered
          function that wrap another functional component. <br /> It prevents to
          rerender ,if the child function props does not change . and thus it
          increase the react application{" "}
        </li>
        <li>
          Code splitting is another way to optimize react application . For big
          file React application ,it takes time to render . <br /> So we can
          render an specific component using React.lazy() thus we can increase
          the react application{" "}
        </li>
      </p>
      <p> What are the different ways to manage a state in a React application?</p>
      <p>Different ways to manage a state are
        <li>Data State </li>
        <li>Control State </li>
        <li>Session State </li>
        <li>Location State </li>   
      </p>
      <p>How does prototypical inheritance work?</p>
      <p>Prototype inheritance is a method by which an object inherit the properties of another objectb  <br />
         
      </p>
      <p>Why you do not set the state directly in React?</p>
      <p>Directly ,updating state ,the state does not update immediately .Rather it create a pending transition state .Also we lost the control of the states across all the component </p>
      <p>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
      <p>{`products.map(product=> product.name)`}
      it will return an array of the product name and thus we can find the product name
      </p>
      <p>What is a unit test? Why should write unit tests?</p>
      <p>Here unit means a section of an application.Unit testing is a type of testing <br /> in which a section of application is tested. The main objective to write unit test is to ensure is <br /> individual part of the application is working well and as it supposed to work. 
      </p>
    </div>
  );
};

export default Blog;
