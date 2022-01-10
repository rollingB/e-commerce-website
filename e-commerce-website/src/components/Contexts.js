import React from "react";

const UserContext = React.createContext('')
const SearchContext = React.createContext({
    searchTerm:'',
    updateSearchTerm: ()=>{}
})

export {UserContext,SearchContext}