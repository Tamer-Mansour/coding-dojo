import React from 'react';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    return(
    <>
    <h1>This is the {name} an article</h1>
    </>
);
    }

export default ArticlePage;