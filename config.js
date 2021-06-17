
const msalConfig = {
    auth: {
      clientId: '1ffe75ec-0d4c-401a-afa1-baf920b05430',
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