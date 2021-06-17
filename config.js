
const msalConfig = {
    auth: {
      clientId: 'f008a3e2-e4a3-4483-9dea-60c1447bdaff',
      redirectUri: 'http://localhost:8080'
    }
  };
  
  const msalRequest = {
    scopes: [
      'user.read',
      'mailboxsettings.read',
      'calendars.readwrite'
    ]
  }