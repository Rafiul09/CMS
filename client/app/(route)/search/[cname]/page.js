"use client";
import CatSearch from '@/app/_components/CatSearch';
import React from 'react';

function Search({ params }) {

    const category = params.cname
    console.log(category)
    return (
        <div>
            <CatSearch category={category} />
        </div>
    );
}

export default Search;
