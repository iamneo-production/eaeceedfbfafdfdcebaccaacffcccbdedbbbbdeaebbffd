function getUserIpDetails(userResponse={}){
    const { userName,userIp= '0.0.0.0'} =userResponse;
    return [userName,userIp];
}

function getTopThree(studentMarks)