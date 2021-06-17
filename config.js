
const msalConfig = {
    auth: {
      clientId: 'a8b8ac59-7134-424a-8ec8-bc3a69ac1654',
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