function load(key:string): any {
    var val : any = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function store(key:string, val:any): void {
    localStorage[key] = JSON.stringify(val);
    // return JSON.parse(val)
}


export const StorageService = {
    load,
    store

}