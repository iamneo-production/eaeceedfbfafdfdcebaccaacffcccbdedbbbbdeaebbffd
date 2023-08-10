const userResponse = {
    userName: 'test',
  };
  
  function getUserIpDetails(userResponse = {}) {
    // Destructure the userIp and userName fields with default values
    const { userIp = '0.0.0.0', userName } = userResponse;
  
    // Return an array containing userName and userIp
    return [userName, userIp];
  }
  
  const studentMarks = [95, 89, 78, 92, 85, 88];
  
  function getTopThree(studentMarks) {
    // Destructure only the first three marks with default value null
    const [firstMark = null, secondMark = null, thirdMark = null] = studentMarks;
  
    // Return an array containing the top three student details
    return [
      { mark: firstMark },
      { mark: secondMark },
      { mark: thirdMark },
    ];
  }
  
  // Test the functions
  const userIpDetails = getUserIpDetails(userResponse);
  console.log('User IP Details:', userIpDetails);
  
  const topThreeStudents = getTopThree(studentMarks);
  console.log('Top Three Students:', topThreeStudents);
  