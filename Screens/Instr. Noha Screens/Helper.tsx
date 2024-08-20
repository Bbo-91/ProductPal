export enum Status {
    Pending,
    InProgress,
    Completed,
    failed,rejected,success
  }
  
  export const lightTheme = {
    backgroundColor: '#F9F9FF',
    tabBarBackground: "#FFFFFF",
    textColor: '#262626',
    headerTxtColor: "#10C7E3",
    screenBackgroundColor: '#F9F9FF',
    white : '#FFFFFF',
    black : '#000000',
    headLinefontSize:30,
    textAlign:"center"
};
export const userProfile =  {
  name:"ali",
  age:20
};
export const darkTheme = {
  backgroundColor: '#F9F9FF',
  tabBarBackground: "#FFFFFF",
  textColor: '#262626',
  headerTxtColor: "#10C7E3",
  screenBackgroundColor: '#F9F9FF',
  white : '#FFFFFF',
  black : '#000000',

};
  let currentStatus: Status = Status.Pending;
  
  if (currentStatus === Status.Pending) {
    console.log('The task is pending.');
  }
  
  // Change the status
  currentStatus = Status.InProgress;
