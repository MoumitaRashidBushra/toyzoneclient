import React from 'react';

const Blog = () => {
    return (

        <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 mb-10' >

            <h1 className='mt-4 text-2xl font-semibold mb-3 text-justify'>What is an access token and refresh token?How do they work and where should we store them on the client-side?</h1>
            <p className='pb-10 pt-1 text-justify '>An access token is a credential that is issued to a user or an application after a successful authentication process. Access tokens are often short-lived and have an expiration time, after which they are no longer considered valid. This approach enhances security by minimizing the window of time in which an access token can be exploited if compromised.A refresh token is another type of credential that is typically issued alongside an access token during the authentication process. While access tokens are short-lived, refresh tokens have a longer lifespan. They are used to request a new access token without requiring the user to re-enter their credentials or perform the full authentication process again. When a refresh token is used to request a new access token, the server or authorization system verifies its validity and, if valid, issues a fresh access token. Refresh tokens are typically securely stored on the client side  in a browser's local storage or Http only cookies to be used when needed. They are considered sensitive and should be protected to prevent unauthorized access.</p>


            <h1 className='text-2xl font-semibold mb-3'>Compare SQL and NoSQL databases?</h1>
            <p className='pb-10 pt-1 text-justify'>A structured data model based on tables with rows and columns is utilized by SQL databases. These databases are excellent for structured, consistent data that complies with a specific schema.NoSQL databases offer a more flexible and dynamic data model. They can store data in various formats such as key-value pairs, documents, wide-column stores, or graph-based models. NoSQL databases are suitable for unstructured, semi-structured, or rapidly changing data, allowing for agile development and accommodating evolving data requirements.SQL databases are generally vertically scalable, on the other hand NoSQL databases are designed to be horizontally scalable, distributing data across multiple servers to handle increased traffic and storage requirements.SQL databases enforce a rigid schema, another side NoSQL databases offer schema flexibility, allowing developers to store data without a predefined schema.</p>


            <h1 className='text-2xl font-semibold mb-3'>What is express js? What is Nest JS </h1>
            <p className='pb-10 pt-1 text-justify'>Express.js is a popular and lightweight web application framework for Node.js. It provides a robust set of features and utilities for building web applications and APIs.Express.js is widely used in various industries and applications, from small-scale projects to large-scale enterprise applications. Its simplicity, flexibility, and active community support have made it one of the most popular choices for web application development with Node.js.Nest.JS is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. NestJs is created for monoliths as well as microservices.NestJs is created for monoliths as well as microservices.</p>


            <h1 className='text-2xl font-semibold mb-3 '>What is MongoDB aggregate and how does it work</h1>
            <p className='pb-10 pt-1 text-justify'>In MongoDB, the aggregate operation is a powerful tool used to process and analyze data within collections. It allows to perform advanced data processing tasks, such as grouping, filtering, sorting, and transforming data, all in a single operation.The aggregate operation uses the MongoDB Aggregation Pipeline, which consists of a series of stages that are executed in a sequence. Each stage performs a specific operation on the input documents and passes the results to the next stage. The output of the final stage is the result of the aggregation operation.</p>
        </div>
    );
};

export default Blog;