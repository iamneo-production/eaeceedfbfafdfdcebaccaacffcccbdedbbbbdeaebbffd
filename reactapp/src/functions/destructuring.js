
  function getUserIpDetails(userResponse = {}) {
    // Destructure the userIp and userName fields with default values
    const { userIp = '0.0.0.0', userName } = userResponse;
  
    // Return an array containing userName and userIp
    return [userName, userIp];
  }
  function getTopThree(studentMarks) {
    // Destructure only the first three marks with default value null
    const [firstMark = null, secondMark = null, thirdMark = null, ...rest] = studentMarks;
  
    // Return an array containing the top three student details
    return [
      {firstMark },
      { mark: secondMark },
      { mark: thirdMark },
    ];
  }
  
  // Test the functions
  const userIpDetails = getUserIpDetails(userResponse);
  console.log('User IP Details:', userIpDetails);
  
  const topThreeStudents = getTopThree(studentMarks);
  console.log('Top Three Students:', topThreeStudents);
  