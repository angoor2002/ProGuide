import React from "react";
import jwt_decode from "jwt-decode";
const Home = ({ token }) => {
    const decodedToken = jwt_decode(token);

    return <h2>Welcome, {decodedToken.name}!</h2>;
};

export default Home;
