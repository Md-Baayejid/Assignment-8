const getStoreApp = () => {

    const storeAppStr = localStorage.getItem("applist")

    if (storeAppStr) {
        const storeAppData = JSON.parse(storeAppStr);
        return storeAppData;
    }
    else{
        return []; 
    }

}

const addToStoreDB = (id) => {

    const storeAppData = getStoreApp();

    if (storeAppData.includes(id) ) {
        alert("Alredy Exist")

    }
    else{
        storeAppData.push(id);
        const data = JSON.stringify(storeAppData);
         localStorage.setItem("applist", data)
         console.log(data)
    }

}

export{addToStoreDB};
export{getStoreApp}