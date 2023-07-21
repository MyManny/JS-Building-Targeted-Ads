// get user's data
// get user's coordinates


// get user's time
                                                              
function userTime(){
    const now = new Date()
    return(now.getHours())                                                 
}
userTime()
console.log('Now let us take a look')
console.log(userTime())

// helper functions
// check time of day


// build ads
// build ad 1

// Get the user's time:                                                              
function getMealTime(){
    const tod = userTime()
    
    // if (tod > 20) {return 'late-night snack'}
    // else if (tod > 16) {return 'dinner'}
    // else if (tod > 11) {return 'lunch'}
    // else {return 'breakfast'}

    return tod > 20 ? 'late-night-snack' :tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
    
    // A ternary is another way to write an if-else statement
    // Another way to write the above lines would to refactor it as:
    // return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast' // <--- this is an example of a ternary
}
    
  console.log(getMealTime())                   

// build ad 2


// event listeners
// on load, build ads
