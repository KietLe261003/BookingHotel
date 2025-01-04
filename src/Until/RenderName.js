export const renderName = (name,size)=>{
    if(name.length<size)
        return name;
    return name.slice(0,size)+" ...";
}