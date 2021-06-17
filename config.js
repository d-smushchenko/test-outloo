
const msalConfig = {
    auth: {
      clientId: 'f46c0df1-6b26-4df4-b6cb-9740fc21bc1e',
      redirectUri: 'https://d-smushchenko.github.io/test-outloo/'
    }
  };
  
  const msalRequest = {
    scopes: [
      'user.read',
      'mailboxsettings.read',
      'calendars.readwrite'
    ]
  }