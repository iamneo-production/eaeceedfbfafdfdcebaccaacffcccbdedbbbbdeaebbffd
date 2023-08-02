function getUserIpDetails(userResponse={}){
    const { userName,userIp= '0.0.0.0'} =userResponse;
    return [userName,userIp];
}

function getTopThree(studentMarks=[]){
    const [first=null,second=null,third=null,...rest]=studentMarks;
    return [first,second,third].sort();
}

export {getUserIpDetails,getTopThree}